const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoodReceivedNotesSchema= new Schema({
    noteID: Number,
    supplier: [Schema.Types.ObjectId],
    Date:String,
    OrderQuantity : Number,
    DeliveredQuantity : String,
    Amount: Number
});

module.exports = mongoose.model('GoodReceivedNotes',GoodReceivedNotesSchema);