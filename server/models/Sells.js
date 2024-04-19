const mongoose = require('mongoose');
const { Schema } = mongoose;

const sellSchema = new Schema({
    productID: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantitySold: {
        type: Number,
        required: true
    },
    entryDate: {
        type: Date,
        default: Date.now
    },
    saleDate: {
        type: Date,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    humidity:{
        type:Number,
        required: true
    },
    temprature:{
        type:Number,
        required : true
    }
});

const Sells = mongoose.model('Sell', sellSchema);

module.exports = Sells;
