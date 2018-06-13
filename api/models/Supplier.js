const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierSchema= new Schema({
    SupplierID: Number,
    name: String,
    email:String,
    drugs: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Supplier', SupplierSchema);