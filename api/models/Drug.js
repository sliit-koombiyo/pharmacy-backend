const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrugSchema= new Schema({
    drugID: Number,
    supplier: {type: Schema.Types.ObjectId, ref: 'supplier'},
    name:String,
    stock : Number,
    type : String,
    price : Number,
    dangerlevel : Number,
    reorderLevel :Number,
    category:String
});

module.exports = mongoose.model('Drug',DrugSchema);

