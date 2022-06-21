import type { NextPage } from "next";
import { useAccount } from "wagmi";
import Body from "../components/Body";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { useIsMounted } from "../hooks/useIsMounted";

const Home: NextPage = () => {
  const { data: accountData } = useAccount();
  const isMounted = useIsMounted();

  return (
    <>
      <Navbar />
      <Body>
        {isMounted && accountData?.address ? <div>Voting list</div> : <Hero />}
      </Body>
    </>
  );
};

export default Home;
