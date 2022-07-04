<p align="center">
  <img src="https://zirconassets.s3.amazonaws.com/Screen+Shot+2022-07-04+at+15.16.04.png" width="400" style="text-align:center;" />
 </p>

<i>ZVoting</i> is a Voting dApp that demonstrates a pure blockchain based Voting descentralized system. This app supports multiple ballots at the same time through the usage of a parent MainVoting contract and a particular Voting contract that keeps track of individual Votings and its options. A React UI is also present in this repo to interact with such Smart Contracts through Metamask. 

## Build locally

All dependencies are contained within a single repo. Contracts are compiled and managed with Hardhat.

```shell
$ yarn install
```
Then open up a new window to start the blockchain

```shell
$ npx hardhat node
```
Deploy the contract
```shell
$ npx hardhat run scripts/deploy.js --network localhost
```

Start the dApp
```shell
$ yarn run dev
```

## Demo

<p align="center">
  <img src="https://zirconassets.s3.amazonaws.com/Jul-04-2022+16-10-46.gif" width="600" />
  <img src="https://zirconassets.s3.amazonaws.com/Jul-04-2022+16-13-25.gif" width="600" />
</p>
