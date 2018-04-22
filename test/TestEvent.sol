pragma solidity ^0.4.18;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Events.sol";

contract TestAdoption {
  Events v = Events(DeployedAddresses.Events());

  function testEvent() public {
    
  }
}