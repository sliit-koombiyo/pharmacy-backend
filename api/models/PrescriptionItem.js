const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrescriptionItemSchema = new Schema({
    drug: Schema.Types.ObjectId,
    dosage: Number,
    frequencty: String,
    quantity: Number
});

module.exports = mongoose.model('PrescriptionItem', PrescriptionItemSchema);