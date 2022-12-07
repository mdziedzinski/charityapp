import React from "react";
import style from "../scss/components/LoginButtons.module.scss";

const UserLogin = () => {
  return (
    <div className={style.container}>
      <p className={style.link}>Log in</p>
      <p className={`${style.signup} ${style.link}`}> Sign up </p>
    </div>
  );
};

export default UserLogin;
