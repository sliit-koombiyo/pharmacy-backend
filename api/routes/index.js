const router = require('express').Router();
const prescriptions = require('./prescriptions');


// default route
router.use('/', (req, res)  => {
    res.status(404).send("Sorry Koombiyo-Pharmacy couldn't find that page !");
});
router.use('/prescriptions', prescriptions);

module.exports = router;