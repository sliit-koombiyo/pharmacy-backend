const router = require('express').Router();
const prescriptions = require('./prescriptions');
const drugs = require('./drugs');
const stocks = require('./stocks');
const drugBatch = require('./drugBatch');

router.use('/prescriptions', prescriptions);
router.use('/drugs', drugs);
router.use('/stocks', stocks);
router.use('/drugsBatch',drugBatch);
// default route
router.use('/', (req, res)  => {
    res.status(404).send("Sorry Koombiyo-Pharmacy couldn't find that page !");
});

module.exports = router;