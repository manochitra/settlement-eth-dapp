# Ethereum Settlement Events DApp
A decentralized settlement event contract application built on the Ethereum blockchain.

### Pre-Prequisite:
 [Gradle](https://gradle.org/install/)</br>
 [Git](https://www.atlassian.com/git/tutorials/install-git)</br>
 [STS](https://spring.io/tools/sts/all)</br>
 [Nodejs 5.0+](https://nodejs.org/en/)</br>
 [Truffle](https://github.com/trufflesuite/truffle)</br>
 [Geth& Solidity &Truffle](https://codeburst.io/build-your-first-ethereum-smart-contract-with-solidity-tutorial-94171d6b1c4b)


## Setup
[Please Refer the Wiki ](https://github.com/manochitra/settlement-eth-dapp/wiki)

##Important Commands (To be executed in GITBASH)

# GETH COMMANDS:
 * To start the geth client with test RPC :</br>
 ```network geth --port 3000 --networkid 58342 --nodiscover --datadir="chaindata" --maxpeers=0 --autodag --rpc --rpcport 8545 --rpcaddr 127.0.0.1 --rpccorsdomain "*" --rpcapi "eth,net,web3"      --ipcapi "eth,net,web3 ```
 
 
 * To Execute geth console commands in another terminal while main terminal is started:</br>
   ```geth attach ipc://home/someone/privchain/geth.ipc```
  </br>
 * To Create Account/wallet :</br>
 ```personal.newAccount```
 * To Unlock Account : </br>
 ```personal.unlockAccount("address","password")```
 
* To Start the Mine :</br>
	```miner.start()``` </br>

## TRUFFLE COMMANDS :

* ```truffle compile``` -  This will compile the all the .sol file and create corresponding JSON. </br>
* ``` truffle migrate ``` - Generated JSON will migrated to EVM bytecode to be understood by Ethereum.</br>
* ```truffle develop `` - Console used to deploy the contract and sending transactions .</br>



 
 
