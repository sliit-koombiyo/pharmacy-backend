const router = require('express').Router();
const prescriptions = require('./prescriptions');

<<<<<<< HEAD

// default route
router.use('/', (req, res)  => {
    res.status(404).send("Sorry Koombiyo-Pharmacy couldn't find that page !");
});
=======
router.use('/prescriptions', prescriptions);
>>>>>>> master

module.exports = router;