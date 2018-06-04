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
        if(!checkifWindowIdExists(aWinId)){
            Windows  memory currentWindwows =  Windows(true,new int[](0));
            windows[aWinId]=currentWindwows;
            windows[aWinId].eventIds.push(eventId);
        }else{
           	int[] ids = windows[aWinId].eventIds;
           	ids.push(eventId);
           	windows[aWinId].eventIds=ids;
        }
        SettlementWindowEvent(aWinId);
       
    }
    
    function getSettlementEventByWindowId(int gWinId,uint eventIndex) public view returns (string){
      		 if( checkifWindowIdExists(gWinId) == true){
      		        int currentEvemt=(windows[gWinId].eventIds[eventIndex]);
        				return  getEvent(currentEvemt);
     				 
      		 }
     }
     
     function getSettlementEventCountByWindowId(int gWindId) public view returns (uint256) {
        return windows[gWindId].eventIds.length;
    }
     
     function getEvent(int id) public view returns (string){
              return (settlementEvent[id].eventData);
     }
     
     function checkifWindowIdExists(int winId) public view returns(bool){
     	return windows[winId].isValue;
   }
     
     
}
