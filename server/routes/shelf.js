const express = require('express');
const router = express.Router();
const Shelf = require("../models/Shelf");
const fetchUser = require("../middleware/fetchUser");

//Route 1 create shelf
router.post('/createShelf', async (req, res) => {
    try {
        const { CurrentVolume, ShelfNo, category } = req.body;

        // Create the shelf
        const newShelf = new Shelf({
            CurrentVolume,
            ShelfNo,
            category
        });

        // Save the shelf to the database
        await newShelf.save();

        res.json({ success: true, message: "Shelf created successfully", shelf: newShelf });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/getShelves', async (req, res) => {
    try {
        // Fetch all shelves from the database
        const shelves = await Shelf.find();

        res.json({ success: true, shelves });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.put('/updateShelf/:shelfId', async (req, res) => {
    const shelfId = req.params.shelfId;
    const { CurrentVolume, ShelfNo, category } = req.body;

    try {
        // Check if the shelf exists
        let shelf = await Shelf.findById(shelfId);
        if (!shelf) {
            return res.status(404).json({ success: false, message: "Shelf not found" });
        }

        // Update the shelf fields
        shelf.CurrentVolume = CurrentVolume;
        shelf.ShelfNo = ShelfNo;
        shelf.category = category;

        // Save the updated shelf to the database
        await shelf.save();

        res.json({ success: true, message: "Shelf updated successfully", shelf });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;
