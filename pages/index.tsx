import type { NextPage } from "next";
import Body from "../components/Body";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

const Index: NextPage = () => {
  return (
    <>
      <Navbar />
      <Body>
        <Home />
      </Body>
    </>
  );
};

export default Index;
