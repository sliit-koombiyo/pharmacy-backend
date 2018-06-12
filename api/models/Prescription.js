const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrescriptionSchema = new Schema({
    prescriptionID: Number,
    createdDate: Date,
    prescribedDate: Date,
    prescriptionItems: [Schema.Types.ObjectId],
    patientID: Number
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);