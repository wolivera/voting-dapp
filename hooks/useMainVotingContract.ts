import * as wagmi from "wagmi";
import { chainId, useProvider, useSigner } from "wagmi";
import { BigNumber, utils } from "ethers";
// Import our contract ABI (a json representation of our contract's public interface).
// The hardhat compiler writes this file to artifacts during compilation.
import MainVotingABI from "../artifacts/contracts/MainVoting.sol/MainVoting.json";

export interface Comment {
  id: string;
  topic: string;
  message: string;
  creator_address: string;
  created_at: BigNumber;
}

const useMainVotingContract = () => {
  // An ethers.Signer instance associated with the signed-in wallet.
  // https://docs.ethers.io/v5/api/signer/
  const signer = useSigner();
  // An ethers.Provider instance. This will be the same provider that is
  // passed as a prop to the WagmiProvider.
  const provider = useProvider();

  console.log("signer data", signer.data)

  // This returns a new ethers.Contract ready to interact with our comments API.
  // We need to pass in the address of our deployed contract as well as its abi.
  // We also pass in the signer if there is a signed in wallet, or if there's
  // no signed in wallet then we'll pass in the connected provider.
  const contract = wagmi.useContract({
    addressOrName: "0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9",
    contractInterface: MainVotingABI.abi,
    signerOrProvider: signer.data || provider,
  });

  // Wrapper to add types to our getComments function.
//   const getComments = async (topic: string): Promise<Comment[]> => {
//     return contract.getComments(topic).then((comments) => {
//       // Each comment is represented as array by default so we convert to object
//       return comments.map((c) => ({ ...c }));
//     });
//   };

//   // Wrapper to add types to our addComment function.
//   const addComment = async (topic: string, message: string): Promise<void> => {
//     // Create a new transaction
//     const tx = await contract.addComment(topic, message);
//     // Wait for transaction to be mined
//     await tx.wait();
//   };

  const getBallots = async (): Promise<string[]> => {
    const items = await contract.ballotId();
    const count = parseInt(items.toHexString());
    const ballotAddresses = [];

    for (let i = 0; i < count; i++) {
      const item = await contract.ballots(i);
      ballotAddresses.push(item);
    }
    return ballotAddresses;
  }

  return {
    contract,
    chainId: contract.provider.network?.chainId,
    getBallots
  };
};

export default useMainVotingContract;
