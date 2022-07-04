import { useContractRead, useContract } from "wagmi";
import { useProvider, useSigner } from "wagmi";
import { BigNumber, utils } from "ethers";
// Import our contract ABI (a json representation of our contract's public interface).
// The hardhat compiler writes this file to artifacts during compilation.
import VotingABI from "../artifacts/contracts/Voting.sol/Voting.json";

export interface Voting {
  name: string;
  description?: string;
  options?: any[];
}

const useVotingContract = (address: string) => {
  // An ethers.Signer instance associated with the signed-in wallet.
  // https://docs.ethers.io/v5/api/signer/
  const signer = useSigner();
  // An ethers.Provider instance. This will be the same provider that is
  // passed as a prop to the WagmiProvider.
  const provider = useProvider();

  console.log("signer data", signer.data);

  // This returns a new ethers.Contract ready to interact with our comments API.
  // We need to pass in the address of our deployed contract as well as its abi.
  // We also pass in the signer if there is a signed in wallet, or if there's
  // no signed in wallet then we'll pass in the connected provider.

  const contract = useContract({
    addressOrName: address || '0x0000000000000000000000000000000000000000',
    contractInterface: VotingABI.abi,
    signerOrProvider: signer.data || provider,
  });

  const getDetails = async (): Promise<Voting> => {
    const name = await contract.name();
    const description = await contract.description();
    const items = await contract.optionsCount();
    const count = parseInt(items.toHexString());
    const options = [];

    for (let i = 0; i < count; i++) {
      const item = await contract.votingOptions(i);
      console.log('item i s', item);
      options.push({
        voteCount: parseInt(item.voteCount.toHexString()),
        name: item.name,
      });
    }

    return {
      name,
      description,
      options,
    }
  };

  const addVotingOption = async (description: string): Promise<void> => {
    // Create a new transaction
    const tx = await contract.addVotingOption(description);
    // Wait for transaction to be mined
    await tx.wait();
  };

  return {
    chainId: provider.network?.chainId,
    getDetails,
    addVotingOption,
  };
};

export default useVotingContract;
