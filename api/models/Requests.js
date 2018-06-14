const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema= new Schema({
    requestID: Number,
    drugName:String,
    requestedQuantity:Number,
    availableQuantity:Number,
    date:Date,
    orderQuantity : Number,
    deliveredQuantity : String,
    amount: Number
});

module.exports = mongoose.model('Requests',RequestSchema);
