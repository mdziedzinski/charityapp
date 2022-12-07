import React from "react";
import style from "../scss/components/Navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <nav className={style.nav}>
        <p className={style.link}>Start</p>
        <p className={style.link}>What is it?</p>
        <p className={style.link}>About us</p>
        <p className={style.link}>Foundations and organizations</p>
        <p className={style.link}> Contact</p>
      </nav>
    </>
  );
};

export default Navbar;
