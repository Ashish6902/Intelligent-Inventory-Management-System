const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ashish:ashish@inventorymanagement.atnyodp.mongodb.net/InventoryManagement";

const connectToMongo = async () => {
        await mongoose.connect(mongoURI);
        console.log("Database connected successfully");
};

module.exports = connectToMongo;
