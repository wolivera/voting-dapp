import type { NextPage } from "next";
import Content from "../components/Content";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Content />
    </>
  );
};

export default Home;
