const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrescriptionItemSchema = new Schema({
    drug: Schema.Types.ObjectId,
    dosage: Number,
    frequencty: String,
    quantity: Number
});

const PrescriptionSchema = new Schema({
    prescriptionID: Number,
    createdDate: Date,
    prescribedDate: Date,
    prescriptionItems: [PrescriptionItemSchema],
    patientID: Number
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);