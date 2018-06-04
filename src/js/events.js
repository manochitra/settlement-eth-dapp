const express = require('express');
const router = express.Router();
import { default as Web3} from "web3"
import { default as contract } from "truffle-contract"
import eventArtifacts from "../../build/contracts/SettlementEvents.json"
var EventContract = contract(eventArtifacts)
var eventData="";
//var settlement = require('./app.js');
router.post('/', (req, res, next) => {
    eventData = {
        windowId: req.body.windowId,
        eventid: req.body.eventid,
        currencycode: req.body.currencycode,
        tranamount: req.body.tranamount
    };
    console.log(eventData);
    settlementevent(eventData);
    res.status(201).json({
        message: 'Event is pushed',
        event: eventData
       
    });
   
});

 function settlementevent(eventData) {
	 console.log("Entered! ");
	 console.log(eventData);
	 const web3 = new Web3( new Web3.providers.HttpProvider("http://localhost:8545") );
	EventContract.setProvider(web3.currentProvider)
    EventContract.defaults({from: web3.eth.accounts[0],gas:650000000000})
    EventContract.deployed().then(function(instance){
      instance.addSettlementEvent("PARSER","10","Sucess").then(function(result){
    	  console.log("Success! ");
    	  return "Success"
      })
    }).catch(function(err){ 
      console.error("ERROR! " + err.message)
    })
  };

  router.post('/getEvent',(req,res,next) => {
		reqWindowId = req.body.windowId;
		res.status(200).json(getSettlementEvent(reqWindowId));
	});

  
function getSettlementEvent(windowId) {
	  
	  var eventCount;
	  var i;
	  var response = Array();
	  	EventContract.setProvider(window.web3.currentProvider)
	    EventContract.defaults({from: window.web3.eth.accounts[0],gas:650000000000})
	    EventContract.deployed().then(function(instance){
	    	instance.getSettlementEventCountByWindowId(windowId).then(function(result){
	    		for(i=0;i<result;i++){
	    			response[i] = instance.getSettlementEventByWindowId(windowId,i);
	    		}
	    	})
	    }).catch(function(err){ 
	        console.error("ERROR! " + err.message)
	    })
	  return response;
  };

  
  
module.exports = router;
