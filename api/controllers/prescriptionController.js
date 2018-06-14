const Prescription = require('../models/Prescription');

module.exports.addPrescription = (prescription) => {
    return Prescription.create(prescription);
}

module.exports.getPrescriptions = () => {
    return Prescription.find({});
}

module.exports.getPrescriptionsByName = (name) => {
    return Prescription.find({patientName: name});
}

module.exports.getPrescriptionsByPatientID = (id) => {
    return Prescription.find({patientID: id});
}