const express = require('express');
const router = express.Router();
require('babel-core/register');
require('babel-polyfill');
//var settlement = require('./app.js');
router.post('/', (req, res, next) => {
    const event = {
        windowId: req.body.windowId,
        eventid: req.body.eventid,
        currencycode: req.body.currencycode,
        tranamount: req.body.tranamount
    };
    console.log(event);
    //console.log(settlement);
   // settlement.start();
    res.status(201).json({
        message: 'Event is pushed to DL',
        event: event
       
    });
});

module.exports = router;