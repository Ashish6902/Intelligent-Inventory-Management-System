const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category:{
        type:String,
        required:true,
    },
    Barcode:{
        type:Number,
        required:true,
        unique: true
    },
    Volume:{
        type:Number,
        required:true
    },
    Quantities:{
        type:Number,
        required:true,
    },
    ShelfNo:{
        type: Schema.Types.ObjectId,
        ref: 'Shelf'
    }
}, { timestamps: true }); // Adding timestamps

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
