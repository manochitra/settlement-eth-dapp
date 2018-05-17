// Import libraries we need.
import { default as Web3} from "web3"
import { default as contract } from "truffle-contract"

// get build artifacts from compiled smart contract and create the truffle contract
import eventArtifacts from "../../build/contracts/SettlementEvents.json"
var EventContract = contract(eventArtifacts)

/*
 * This holds all the functions for the app
 */

  // called when web3 is set up
  start: function() { 
    // setting up contract providers and transaction defaults for ALL contract instances
	EventContract.setProvider(window.web3.currentProvider)
    EventContract.defaults({from: window.web3.eth.accounts[0],gas:6721975})
 };

  // Function that is called when user clicks the "vote" button
  event: function(eventData) {
	  
    EventContract.deployed().then(function(instance){
      instance.addSettlementEvent("PARSER","10","Sucess").then(function(result){
    	  console.log("Success! ")
      })
    }).catch(function(err){ 
      console.error("ERROR! " + err.message)
    })
  };



