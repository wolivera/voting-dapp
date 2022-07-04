import { useAccount, chainId, useNetwork } from "wagmi";
import Hero from "./Hero";
import { useIsMounted } from "../../hooks/useIsMounted";
import { LoadingCover } from "../Loading";
import VotingList from "../VotingList";
import { getChainId } from "../../web3/utils";

const Home = () => {
  const { data: accountData } = useAccount();
  const isMounted = useIsMounted();
  const { activeChain } = useNetwork();
  const isValidChain = !!(activeChain && activeChain.id === getChainId());

  return (
    <>
      {!isMounted && <LoadingCover />}
      {isMounted && accountData?.address && isValidChain && <VotingList />}
      {isMounted && (!accountData?.address || !isValidChain) && <div className="hero absolute top-0 bottom-0"><Hero /></div>}
    </>
  );
};

export default Home;
