const express = require('express');
const router = express.Router();
const Sells = require("../models/Sells");
const fetchUser = require("../middleware/fetchUser");

router.post('/createSell', async (req, res) => {
    try {
        const { productID, quantitySold, entryDate, saleDate, totalPrice, humidity, temprature } = req.body;

        // Create the product
        const newsell = new Sells({
            productID,
            quantitySold,
            entryDate,
            saleDate,
            totalPrice,
            humidity,
            temprature
        });

        // Save the product to the database
        await newsell.save();

        res.json({ success: true, message: "Sells created successfully", product: newsell });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



// Route 2 to get all sell
router.get('/Getsell', async (req, res) => {
    try {
        // Fetch all sell from the database
        const sell = await Sells.find();

        // Return the sell
        res.json({ success: true, sell });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to update a sell by ID
router.put('/updateSell/:sellId', async (req, res) => {
    try {
        const sellId = req.params.sellId;
        const { productID, quantitySold, entryDate, saleDate, totalPrice, humidity, temprature } = req.body;

        // Check if the sell exists
        let sell = await Sells.findById(sellId);
        if (!sell) {
            return res.status(404).json({ success: false, message: "Sell not found" });
        }

        // Update the sell fields
        sell.productID = productID;
        sell.quantitySold = quantitySold;
        sell.entryDate = entryDate;
        sell.saleDate = saleDate;
        sell.totalPrice = totalPrice;
        sell.humidity = humidity;
        sell.temprature = temprature;

        // Save the updated sell to the database
        await sell.save();

        res.json({ success: true, message: "Sell updated successfully", sell });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;