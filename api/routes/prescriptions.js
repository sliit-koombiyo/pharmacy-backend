const router = require('express').Router();
const prescriptionController = require('../controllers/prescriptionController');

router.post('/', (req, res, next) => {
    prescriptionController.addPrescription(req.body)
        .then((newPrescription) => {
            res.send(newPrescription);
        }).catch(next);
});

router.get('/', (req, res, next) => {
    if (req.query.patientID) {
        prescriptionController.getPrescriptionsByPatientID(req.query.patientID)
            .then((prescriptions) => {
                res.send(prescriptions);
            }).catch(next);
    } else if (req.query.patientName) {
        prescriptionController.getPrescriptionsByName(req.query.patientName)
            .then((prescriptions) => {
                res.send(prescriptions);
            }).catch(next);
    } else {
        prescriptionController.getPrescriptions()
            .then((prescriptions) => {
                res.send(prescriptions);
            }).catch(next);
    }
});

module.exports = router;