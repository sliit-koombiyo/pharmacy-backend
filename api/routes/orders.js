const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.post('/', (req, res, next)=>{
    drugController.addOrder(req.body)
    .then((newOrder)=>{
        res.send(newOrder);
    }).catch(next);
});

router.delete('/:id', (req, res, next)=>{
    drugController.DeleteAOrder(req.params.id)
    .then((newOrder)=>{
        res.send(newOrder);
    }).catch(next);
});

router.get('/', (req, res, next)=>{
    drugController.GetAllOrders()
    .then((newOrder)=>{
        res.send(newOrder);
    }).catch(next);
});

module.exports = router;