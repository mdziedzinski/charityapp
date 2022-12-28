import React from "react";
import style from "../scss/components/LoginButtons.module.scss";
import { NavLink, useResolvedPath, useMatch } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const { currentUser, user, logout } = UserAuth();
  const navigate = useNavigate();
  const showLogin = () => {
    if (user && user.email != null) {
      return (
        <div className={style.container}>
          <p>Hello {user && user.email} </p>
          <button className={style.button} onClick={handleLogout}>
            Log out
          </button>
        </div>
      );
    } else {
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
    }
  };

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
    <>
      {/* <p>
        Your email:{" "}
        {user && user.email ? user && user.email : console.log("error")}{" "}
        <button onClick={handleLogout}>Log out</button>
      </p> */}
      {showLogin()}
    </>
  );
};

export default UserLogin;
