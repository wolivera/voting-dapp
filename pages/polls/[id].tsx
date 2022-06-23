import type { NextPage } from "next";
import Body from "../../components/Body";
import Navbar from "../../components/Navbar";
import Details from "../../components/VotingList/Details";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Body>
        <Details />
      </Body>
    </>
  );
};

export default Home;
