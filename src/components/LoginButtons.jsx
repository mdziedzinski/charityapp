import React from "react";
import style from "../scss/components/LoginButtons.module.scss";
import { NavLink, useResolvedPath, useMatch } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
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
    <div className={style.container}>
      <NavLink to="/login" className={style.link} end>
        Log in
      </NavLink>
      <NavLink to="/signup" className={`${style.signup} ${style.link}`} end>
        {" "}
        Sign up{" "}
      </NavLink>
      <p>Your email: {user && user.email}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default UserLogin;
