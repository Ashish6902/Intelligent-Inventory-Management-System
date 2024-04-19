const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShelfSchema = new Schema({
    CurrentVolume: {
        type: Number,
        required: true,
    },
    ShelfNo: {
        type: Number,
        required: true,
    },
    category:{
        type:String,
        required:true,
    }
});

const Product = mongoose.model('Shelf', ShelfSchema);

module.exports = Product;
