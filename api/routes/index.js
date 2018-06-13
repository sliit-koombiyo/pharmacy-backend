const router = require('express').Router();
const prescriptions = require('./prescriptions');
const drugs = require('./drugs');

router.use('/prescriptions', prescriptions);
router.use('/drugs', drugs);
// default route
router.use('/', (req, res)  => {
    res.status(404).send("Sorry Koombiyo-Pharmacy couldn't find that page !");
});

module.exports = router;