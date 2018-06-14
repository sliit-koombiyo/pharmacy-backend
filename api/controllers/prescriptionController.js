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

module.exports.dispense = (prescription) => {
    console.log("dispensed :" + prescription._id);
    var criteria = {
        _id:{ $in: request.payload.split(',')}
       };
    return new Promise((resolve, reject)=>{
        Prescription.update(criteria, { status: true }, { multi: true }, (err, res) => {
            if(err) { 
                callback(err, null);
            } else { 
                callback(null, res);
            }
        )
        if(prescription.prescriptionItems){
            resolve(prescription.prescriptionItems);
        } else {
            reject(new Error('error'));
        }
    })
    
}