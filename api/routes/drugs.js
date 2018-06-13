const router = require('express').Router();
const drugController = require('../controllers/drugController');

router.post('/', (req, res, next)=>{
    drugController.addDrug(req.body)
    .then((newDrug)=>{
        res.send(newDrug);
    }).catch(next);
});

module.exports = router;