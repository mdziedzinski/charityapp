import React from "react";
import UserLogin from "./LoginButtons";
import Navbar from "./Navbar";
import Header from "./Header";
import ThreeCols from "./ThreeCols";
import FourCols from "./FourCols";
import AboutUs from "./AboutUs";
import Organizations from "./Organizations";

const Home = () => {
  return (
    <>
      <UserLogin></UserLogin>
      <Navbar></Navbar>
      <Header></Header>
      <ThreeCols></ThreeCols>
      <FourCols></FourCols>
      <AboutUs></AboutUs>
      <Organizations></Organizations>
    </>
  );
};

export default Home;
