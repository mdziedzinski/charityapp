import React, { useState } from "react";
import style from "../scss/components/Login.module.scss";
import decoration from "../assets/Decoration.svg";
import Footer from "./Footer";
import LoginButtons from "./LoginButtons";
import Navbar from "./Navbar";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("log out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div>
      <LoginButtons></LoginButtons>
      <Navbar></Navbar>
      <p>Your email: {user && user.email}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Account;
