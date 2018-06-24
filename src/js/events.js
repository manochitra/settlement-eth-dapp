const express = require('express');
const router = express.Router();
import { default as Web3} from "web3"
import { default as contract } from "truffle-contract"
import eventArtifacts from "../../build/contracts/SettlementEvents.json"
var EventContract = contract(eventArtifacts)
var eventData="";
var deployed_address="";
//var settlement = require('./app.js');
router.post('/', (req, res, next) => {
    eventData = {
    		component:req.body.component,
    		business:req.body.business,
    		MerchantName:req.body.MerchantName,
    		MerchantNumber:req.body.MerchantNumber,
    		crdNumber:req.body.crdNumber,
    		txnType:req.body.txnType,
    		txnAmount:req.body.txnAmount,
    		windowId: req.body.windowId,	
    		eventid: req.body.eventid,
    };
    settlementevent(eventData);
    res.status(201).json({
        message: 'Event is pushed',
        event: eventData
    });
   
});

router.get('/',(req,res,next) => {
	 var reqWindowId = req.query.windowId;
	 console.log(req.query);
	 var result =getSettlementEvent(reqWindowId)
	res.status(200).json(result);
});


 function settlementevent(eventData) {
	 console.log("Adding Settlement Event");
	 const web3 = new Web3( new Web3.providers.HttpProvider("http://localhost:8545") );
	EventContract.setProvider(web3.currentProvider)
    EventContract.defaults({from: web3.eth.accounts[0],gas:650000000})
	 var value =eventData.windowId + eventData.eventid +eventData.component;
	console.log(value);
    EventContract.deployed().then(function(instance){
    	deployed_address=instance.address;
      instance.addSettlementEvent(parseInt(eventData.windowId),parseInt(eventData.eventid),JSON.stringify(eventData)).then(function(result){
    	  console.log("Success! ");
       	  return "Success "+ result;
      })
    }).catch(function(err){  	
      console.error("ERROR! " + err.message)
    })
  };

   
function getSettlementEvent(reqWindowId) {
	console.log("Getting Settlement Event");
	console.log(reqWindowId);
	  var eventCount;
	  var i;
	  var response = Array();
	 
	  const web3 = new Web3( new Web3.providers.HttpProvider("http://localhost:8545") );
	  EventContract.setProvider(web3.currentProvider);
	  EventContract.defaults({from: web3.eth.accounts[0],gas:6500000000});
	  console.log(deployed_address);
	  let ins =  EventContract.at(deployed_address);
	       ins.getSettlementEventCountByWindowId(parseInt(reqWindowId)).then(function(result){
	    		for(i=0;i<parseInt(result);i++){
	   	    			ins.getSettlementEventByWindowId(parseInt(reqWindowId),parseInt(i)).then(function(output){
	   	    				console.log(output);
	   	    				response[i]= output;
	   	    				console.log("respomse"+response[i]);
	   	    			});
	    		}
	    	}).catch(function(err){ 
	        console.error("ERROR! " + err.message)
	    })
	   console.log("Response"+ response);
	 return response;
  };

  
  
module.exports = router;
