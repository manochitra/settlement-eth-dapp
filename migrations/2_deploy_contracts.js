var Events = artifacts.require("./SettlementEvents.sol")

module.exports = function(deployer) {
  deployer.deploy(Events)
}