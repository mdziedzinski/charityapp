import React from "react";
import UserLogin from "./LoginButtons";
import Navbar from "./Navbar";
import Header from "./Header";
import ThreeCols from "./ThreeCols";
import FourCols from "./FourCols";

const Home = () => {
  return (
    <>
      <UserLogin></UserLogin>
      <Navbar></Navbar>
      <Header></Header>
      <ThreeCols></ThreeCols>
      <FourCols></FourCols>
    </>
  );
};

export default Home;
