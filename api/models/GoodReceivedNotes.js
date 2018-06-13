const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoodReceivedNotesSchema= new Schema({
    noteID: Number,
    supplier: [Schema.Types.ObjectId],
    date:String,
    orderQuantity : Number,
    deliveredQuantity : String,
    amount: Number
});

module.exports = mongoose.model('GoodReceivedNotes',GoodReceivedNotesSchema);