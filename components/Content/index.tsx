import { useAccount } from "wagmi";
import Hero from "./Hero";
import { useIsMounted } from "../../hooks/useIsMounted";
import Loading from "../Loading";

const Content = () => {
  const { data: accountData } = useAccount();
  const isMounted = useIsMounted();

  console.log('mounted?', isMounted);
  console.log('account data?', accountData);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        {!isMounted && <Loading />}
        {isMounted && accountData?.address && <div>Voting list</div>}
        {isMounted && !accountData?.address && <Hero />}
      </div>
    </>
  );
};

export default Content;
