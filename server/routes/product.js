const express = require('express');
const router = express.Router();
const Product = require("../models/Product");
const Shelf = require("../models/Shelf");
const fetchUser = require("../middleware/fetchUser");


router.post('/createProduct', async (req, res) => {
    try {
        const { name, description, price, category, Barcode, Volume, Quantities, shelfId } = req.body;

        // Create the product
        const newProduct = new Product({
            name,
            description,
            price,
            category,
            Barcode,
            Volume,
            shelfId,
            Quantities
        });

        // Save the product to the database
        await newProduct.save();

        res.json({ success: true, message: "Product created successfully", product: newProduct });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



// Route 2 to get all Getproducts
router.get('/Getproducts',fetchUser, async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find();

        // Return the products
        res.json({ success: true, products });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.put('/updateProduct/:productId', fetchUser, async (req, res) => {
    const productId = req.params.productId;
    const { name, description, price, category, subcategory, Barcode } = req.body;

    try {
        // Check if the product exists
        let product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        // Update the product fields
        product.name = name;
        product.description = description;
        product.price = price;
        product.category = category;
        product.subcategory = subcategory;
        product.Barcode = Barcode;

        // Save the updated product to the database
        await product.save();

        res.json({ success: true, message: "Product updated successfully", product });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


//Route 4 Delete product 
router.delete('/deleteProduct/:productId', fetchUser, async (req, res) => {
    const productId = req.params.productId;

    try {
        // Check if the product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        // Delete the product from the database
        await Product.findByIdAndDelete(productId);

        res.json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
