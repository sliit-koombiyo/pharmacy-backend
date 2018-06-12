const router = require('express').Router();
const prescriptions = require('./prescriptions');

router.use('/prescriptions', prescriptions);

module.exports = router;