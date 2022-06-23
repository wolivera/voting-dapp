import { useAccount } from "wagmi";
import Hero from "./Hero";
import { useIsMounted } from "../../hooks/useIsMounted";
import { LoadingCover } from "../Loading";
import VotingList from "../VotingList";

const Home = () => {
  const { data: accountData } = useAccount();
  const isMounted = useIsMounted();

  return (
    <>
      {!isMounted && <LoadingCover />}
      {isMounted && accountData?.address && <VotingList />}
      {isMounted && !accountData?.address && <div className="hero absolute top-0 bottom-0"><Hero /></div>}
    </>
  );
};

export default Home;
