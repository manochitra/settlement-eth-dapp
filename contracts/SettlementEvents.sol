pragma solidity ^0.4.18;
// written for Solidity version 0.4.18 and above that doesnt break functionality

contract SettlementEvents {
    
    address public executor;
    // describes a EVENT
    struct SettlementEvent {
        string eventData;
    }

    function SettlementEvents()  {
         executor=msg.sender;
    }
    mapping (int => SettlementEvent) settlementEvent;
  
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     *  These functions perform transactions, editing the mappings *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    function addSettlementEvent(uint windowId,int eventId,string data) public {
        settlementEvent[eventId] =  SettlementEvent(data);
    }  
     
      function getSettlementEventByWindowId(int id) public view returns (string){
              return (settlementEvent[id].eventData);
     }  	
     
     
}