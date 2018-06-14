const router = require('express').Router();
const stockController = require('../controllers/stockController');

router.get('/', (req, res, next) => {
    stockController.getStocks()
    .then((stocks)=>{
        res.send(stocks);
    }).catch(next);
});

module.exports = router;