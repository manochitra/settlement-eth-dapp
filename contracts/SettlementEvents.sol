pragma solidity ^0.4.18;
// written for Solidity version 0.4.18 and above that doesnt break functionality

contract SettlementEvents {
    
    address public executor;
    event SettlementWindowEvent(int);
    
    // describes a EVENT
    struct SettlementEvent {
   	   string eventData;
    }

	struct Windows{
    	bool isValue;
		int[] eventIds;
	}
   
    mapping (int => SettlementEvent) settlementEvent;
    mapping (int => Windows) windows;
  
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     *  These functions perform transactions, editing the mappings *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    function addSettlementEvent(int aWinId,int eventId,string data) public {
        settlementEvent[eventId] =  SettlementEvent(data);
      	int[] storage ids;
        if(!checkifWindowIdExists(aWinId)){
       		 ids.push(eventId);
       		 windows[aWinId].eventIds=ids;
       		 windows[aWinId].isValue=true;
        }else{
          // int[] existingIds= windows[aWinId].eventIds   ; 
          // existingIds.push(eventId);
           	 windows[aWinId].eventIds.push(eventId);
        }
        SettlementWindowEvent(aWinId);
       
    }  
     
     function checkifWindowIdExists(int winId) public view returns(bool){
     	return windows[winId].isValue;
   }
     
     
}