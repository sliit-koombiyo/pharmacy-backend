const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoodReceivedNotesSchema= new Schema({
    noteID: Number,
    orderQuantity : Number,
    deliveredQuantity : String,
    amount: Number,
    date:Date
});

module.exports = mongoose.model('GoodReceivedNotes',GoodReceivedNotesSchema);


