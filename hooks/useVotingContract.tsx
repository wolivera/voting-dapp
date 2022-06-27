import { useContractRead, useContract } from "wagmi";
import { useProvider, useSigner } from "wagmi";
import { BigNumber, utils } from "ethers";
// Import our contract ABI (a json representation of our contract's public interface).
// The hardhat compiler writes this file to artifacts during compilation.
import VotingABI from "../artifacts/contracts/Voting.sol/Voting.json";

export interface Voting {
  id: number;
  name: string;
  description?: string;
}

const useVotingContract = (ballots: any) => {
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

  const getContract = (address: string) => {
    return useContract({
      addressOrName: address,
      contractInterface: VotingABI.abi,
      signerOrProvider: signer.data || provider,
    });
  };

  console.log('use?', ballots);
  const contract2 = useContract({
    addressOrName: ballots?.[0],
    contractInterface: VotingABI.abi,
    signerOrProvider: signer.data || provider,
  });

  const getVotingList = async (addresses: string[] = []): Promise<Voting[]> => {
    const votingList = [];
    console.log("add", addresses);
    for (let i = 0; i < addresses.length; i++) {
      console.log("got contract");
      const name = await contract2.name();
      console.log("name", name);
      // console.log('contract', contract);
      votingList.push({ id: i, name });
    }
    return votingList;
  };

  return {
    chainId: provider.network?.chainId,
    getVotingList,
  };
};

export default useVotingContract;
