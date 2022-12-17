import React, { useState } from "react";
import style from "../scss/components/Login.module.scss";
import decoration from "../assets/Decoration.svg";
import Footer from "./Footer";
import LoginButtons from "./LoginButtons";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <LoginButtons></LoginButtons>
      <Navbar></Navbar>
      <div className={style.wrapper}>
        <h2>Log in</h2>
        <img src={decoration} alt="decoration" />
        <form>
          <div className={style.container}>
            <label className={style.emailLabel}>Type your e-mail </label>
            <input
              className={style.emailInput}
              type="email"
              name="email"
              placeholder="test@gmail.com"
            />
            <label className={style.name}>Type your password:</label>
            <input
              className={style.name}
              type="password"
              name="password"
            />{" "}
          </div>
          <NavLink to="/signup" className={style.secButton}>
            Sign up
          </NavLink>
          <button type="submit">Login</button>
        </form>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Login;
