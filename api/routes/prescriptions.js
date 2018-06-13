const router = require('express').Router();
const prescriptionController = require('../controllers/prescriptionController');

router.post('/', (req, res, next)=>{
    prescriptionController.addPrescription(req.body)
    .then((newPrescription)=>{
        res.send(newPrescription);
    }).catch(next);
});

router.get('/', (req, res, next)=>{
    prescriptionController.getPrescriptions()
    .then((prescriptions)=>{
        res.send(prescriptions);
    }).catch(next);
});

module.exports = router;