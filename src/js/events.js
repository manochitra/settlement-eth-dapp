const express = require('express');
const router = express.Router();
require('babel-core/register');
require('babel-polyfill');
import { default as Web3} from "web3"
import { default as contract } from "truffle-contract"
import eventArtifacts from "../../build/contracts/SettlementEvents.json"
var EventContract = contract(eventArtifacts)

const SettlementEvents = artifacts.require("./SettlementEvents.sol")
//var settlement = require('./app.js');
router.post('/', (req, res, next) => {
    const event = {
        windowId: req.body.windowId,
        eventid: req.body.eventid,
        currencycode: req.body.currencycode,
        tranamount: req.body.tranamount
    };
    console.log(event);
    res.status(201).json({
        message: 'Event is pushed',
        event: event
       
    });
});

start : function() {
	EventContract.setProvider(window.web3.currentProvider)
    EventContract.defaults({from: window.web3.eth.accounts[0],gas:6721975})
    EventContract.deployed().
}

event: function(eventData) {
	  
    EventContract.deployed().then(function(instance){
      instance.addSettlementEvent("PARSER","10","Sucess").then(function(result){
    	  console.log("Success! ")
      })
    }).catch(function(err){ 
      console.error("ERROR! " + err.message)
    })
  };

  
module.exports = router;
module.exports = function(deployer) {
	deployer.deploy(SettlementEvents);
};