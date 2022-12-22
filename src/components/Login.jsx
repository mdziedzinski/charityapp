import React, { useState } from "react";
import style from "../scss/components/Login.module.scss";
import decoration from "../assets/Decoration.svg";
import Footer from "./Footer";
import LoginButtons from "./LoginButtons";
import Navbar from "./Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const { singIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <>
      <LoginButtons></LoginButtons>
      <Navbar></Navbar>
      <div className={style.wrapper}>
        <h2>Log in</h2>
        <img src={decoration} alt="decoration" />
        <form onSubmit={handleSubmit}>
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
          <div className={style.buttons}>
            <NavLink to="/signup" className={style.secButton}>
              Sign up
            </NavLink>
            <button type="submit">Login</button>
          </div>
        </form>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Login;
