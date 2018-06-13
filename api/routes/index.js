const router = require('express').Router();
const prescriptions = require('./prescriptions');

router.use('/prescriptions', prescriptions);
// default route
router.use('/', (req, res)  => {
    res.status(404).send("Sorry Koombiyo-Pharmacy couldn't find that page !");
});

module.exports = router;