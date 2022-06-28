import type { NextPage } from "next";
import { useRouter } from "next/router";
import Body from "../../components/Body";
import Navbar from "../../components/Navbar";
import Details from "../../components/VotingList/Details";

const Home: NextPage = () => {
  const router = useRouter();
  const id: string = router.query.id as string;

  return (
    <>
      <Navbar />
      <Body>
        <Details id={id} />
      </Body>
    </>
  );
};

export default Home;
