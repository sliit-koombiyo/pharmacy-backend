const Prescription = require('../models/Prescription');

module.exports.addPrescription = (prescription) => {
        return("prescription to be added : " + JSON.stringify(prescription));
    }

module.exports.getPrescriptions = () => {
        return("prescriptions retrieved ");
    }