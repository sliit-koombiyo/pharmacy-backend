const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrugSchema= new Schema({
    drugID: Number,
    supplier: [Schema.Types.ObjectId],
    name:String,
    stock : Number,
    type : String,
    price : Number,
    dangerlevel : Number,
    reorderLevel :Number
});

module.exports = mongoose.model('Drug',DrugSchema);