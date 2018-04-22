# Ethereum Settlement Events DApp
A decentralized settlement event application built on the Ethereum blockchain

### Dependencies:
- [Nodejs 5.0+](https://nodejs.org/en/)
- [Truffle](https://github.com/trufflesuite/truffle)
- [Ganache](http://truffleframework.com/ganache/)

## Setup
```
npm install -g truffle
git clone https://github.com/tko22/eth-voting-dapp.git
cd eth-voting-dapp
npm install
```
Then, open up a new terminal tab:
```
truffle develop
> compile
> migrate
```
Go back to your previous tab:
```
npm run dev
```

##Important Commands

 truffle(development)>  Events.deployed().then(function(instance){return instance.addCandidate("Parser",1,"Suc");})
 
