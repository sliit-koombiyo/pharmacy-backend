const router = require('express').Router();

router.get('/', (req, res, next)=>{
    res.send("prescription route")
});

module.exports = router;