const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema= new Schema({
    orderID: Number,
    from: String,
    to:String,
    subject : String,
    conotent:String
   
});

module.exports = mongoose.model('Orders',OrderSchema);
