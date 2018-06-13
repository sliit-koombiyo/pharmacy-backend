const router = require('express').Router();
const prescriptionController = require('../controllers/prescriptionController');

router.get('/', (req, res, next)=>{
    res.send(prescriptionController.getPrescriptions());
});

router.post('/', (req, res, next)=>{
    res.send(prescriptionController.addPrescription(req.body));
});

module.exports = router;