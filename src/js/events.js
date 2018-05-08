const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    const event = {
        windowId: req.body.windowId,
        partyname: req.body.partyname,
        currencycode: req.body.currencycode,
        tranamount: req.body.tranamount
    };
    res.status(201).json({
        message: 'Event is pushed to DL',
        event: event
    });
});



module.exports = router;