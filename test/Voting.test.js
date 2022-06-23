const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Voting", function(accounts) {

    let contract;

    beforeEach('Should setup the contract contract', async () => {
        // contract = await Voting.new('Cual es el mejor dia de la semana?', 'Veamos cual es el mejor dia de la semana para la gente de Zircon', 7);
        const Voting = await ethers.getContractFactory("Voting");
        const contract = await Voting.deploy('Cual es el mejor dia de la semana?', 'Veamos cual es el mejor dia de la semana para la gente de Zircon', 7);
        await contract.deployed();
    });

    describe('The constructor', function() {

        it("initializes with a name and description", async function() {
            const owner = await contract.owner();
            const name = await contract.name();
            const description = await contract.description();
            const maxOptions = await contract.maxOptions();

            assert.equal(owner, accounts[0]);
            assert.equal(name, "Cual es el mejor dia de la semana?");
            assert.equal(description, "Veamos cual es el mejor dia de la semana para la gente de Zircon");
            assert.equal(maxOptions, 7);
        });
    })

    describe('Controls the voting opening', function() {

        it("Opens the voting", async function() {
            let isOpen = await contract.isOpen();

            assert.equal(isOpen, false);

            await contract.openVotation();

            isOpen = await contract.isOpen();
            assert.equal(isOpen, true);
        });

        it("Closes the voting", async function() {
            await contract.openVotation();

            let isOpen = await contract.isOpen();
            assert.equal(isOpen, true);

            await contract.closeVotation();

            isOpen = await contract.isOpen();
            assert.equal(isOpen, false);
        });
    })

    describe('Vote an option', function () {

        it('Fails to vote if votation is closed', async function() {
            try {
                await contract.vote(1);
            } catch (err) {
                assert.include(err.message, 'Votation is closed');
            }
        })

        it('Fails to vote if option is invalid', async function() {
            await contract.openVotation();

            try {
                await contract.vote(40);
            } catch (err) {
                assert.include(err.message, 'Invalid option or it was removed');
            }
        })

        it('Fails to vote if voter is not allowed', async function() {
            await contract.addVotingOption('Lunes');
            await contract.openVotation();

            try {
                await contract.vote(0);
            } catch (err) {
                assert.include(err.message, 'You are not allowed to vote');
            }
        })

        it('Adds a vote', async function() {
            await contract.addVotingOption('Lunes');
            await contract.allowVoter(accounts[0]);
            await contract.openVotation();

            await contract.vote(0);

            const votingOption = await contract.votingOptions(0);
            const vote = await contract.voters(accounts[0]);

            assert.equal(votingOption.name, 'Lunes');
            assert.equal(votingOption.voteCount, 1);
            assert.equal(vote, true);
        })

        it('Fails to vote twice', async function() {
            await contract.addVotingOption('Lunes');
            await contract.allowVoter(accounts[0]);
            await contract.openVotation();

            await contract.vote(0);

            try {
                await contract.vote(0);
            } catch (err) {
                assert.include(err.message, 'You have already voted');
            }
        })
    })
})
