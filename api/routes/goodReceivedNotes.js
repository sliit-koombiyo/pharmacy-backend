const router = require('express').Router();
const goodReceivedNotesController = require('../controllers/goodReceivedNotesController');

router.post('/', (req, res, next)=>{
    goodReceivedNotesController.addgoodReceivedNotes(req.body)
    .then((newgoodReceivedNotes)=>{
        res.send(newgoodReceivedNotes);
    }).catch(next);
});

router.get('/', (req, res, next)=>{
    goodReceivedNotesController.getgoodReceivedNotes()
    .then((goodReceivedNotes)=>{
        res.send(goodReceivedNotes);
    }).catch(next);
});

module.exports = router;