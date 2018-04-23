pragma solidity ^0.4.18;
// written for Solidity version 0.4.18 and above that doesnt break functionality

contract Events {
    
    // describes a Candidate
    struct Event {
        bytes32 eventname;
        bytes32 data;
    }

    // Think of these as a hash table, with the key as a uint and value of 
    // the struct Candidate/Voter. These mappings will be used in the majority
    // of our transactions/calls
    // These mappings will hold all the candidates and Voters respectively
    mapping (uint => Event) events;
    
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     *  These functions perform transactions, editing the mappings *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    function addCandidate(bytes32 name, uint id,bytes32 data) public {
        // candidateID is the return variable
        // Create new Candidate Struct with name and saves it to storage.
        events[id] = Event(name,data);
     }  
     
      function getCandidate(uint id) public view returns (bytes32 ,bytes32){
       
       return (events[id].eventname,events[id].data);
     }  
     
     
}