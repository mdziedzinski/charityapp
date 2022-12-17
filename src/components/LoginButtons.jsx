import React from "react";
import style from "../scss/components/LoginButtons.module.scss";
import { NavLink, useResolvedPath, useMatch } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className={style.container}>
      <NavLink to="/login" className={style.link} end>
        Log in
      </NavLink>
      <NavLink to="/signup" className={`${style.signup} ${style.link}`} end>
        {" "}
        Sign up{" "}
      </NavLink>
    </div>
  );
};

export default UserLogin;
