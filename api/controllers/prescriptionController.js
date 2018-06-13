const Prescription = require('../models/Prescription');

module.exports.addPrescription = (prescription) => {
        return Prescription.create(prescription);
    }

module.exports.getPrescriptions = () => {
        return Prescription.find({});
    }