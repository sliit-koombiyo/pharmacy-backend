const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrescriptionItemSchema = new Schema({
    drug: {
        type: Schema.Types.ObjectId,
        required: [true, 'drug name is required']
    },
    dosage: Number,
    frequency: String,
    quantity: Number
});

const PrescriptionSchema = new Schema({
    prescriptionID: {
        type: Number,
        required: [true, 'prescription ID is required']
    },
    prescribedDate: Date,
    prescriptionItems: [PrescriptionItemSchema],
    patientID: {
        type: Number,
        required: [true, 'patient ID is required']
    },
    patientName: {
        type: String,
        required: [true, 'patient ID is required']
    }
}, {timestamps: true});

module.exports = mongoose.model('Prescription', PrescriptionSchema);