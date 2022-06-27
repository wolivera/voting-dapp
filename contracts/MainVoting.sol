// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
// pragma experimental ABIEncoderV2;

import './Voting.sol';

contract MainVoting {
    uint public ballotId = 0;
    mapping (uint => address) public ballots;

    function createBallot (string memory _name, string memory _description) public {
        Voting voting = new Voting(_name, _description, 10);
        ballots[ballotId] = address(voting);
        ballotId++;
    }
}
