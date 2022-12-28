import React, { useState } from "react";
import style from "../scss/components/Login.module.scss";
import decoration from "../assets/Decoration.svg";
import Footer from "./Footer";
import LoginButtons from "./LoginButtons";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      <LoginButtons></LoginButtons>
      <Navbar></Navbar>
      <div className={style.wrapper}>
        <h2>Sign up</h2>
        <img src={decoration} alt="decoration" />
        <form onSubmit={handleSubmit}>
          <div className={style.container}>
            <label className={style.emailLabel}>Type your e-mail </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className={style.emailInput}
              type="email"
              name="email"
              placeholder="test@gmail.com"
            />
            <label className={style.name}>Type your password:</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className={style.name}
              type="password"
              name="password"
            />{" "}
            <div className={style.error}>
              {error
                ? `There is something wrong ${error}`
                : console.log("no error")}
            </div>
          </div>

          <div className={style.buttons}>
            <NavLink to="/login" className={style.secButton}>
              Log in
            </NavLink>
            <button>Sign up</button>
          </div>
        </form>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Signup;
