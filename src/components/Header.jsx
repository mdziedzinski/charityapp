import React from "react";
import style from "../scss/components/Header.module.scss";
import hero from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import Navbar from "./Navbar";
import LoginButtons from "./LoginButtons";
const Header = () => {
  return (
    <>
      <LoginButtons></LoginButtons>
      <Navbar></Navbar>

      <header className={style.header}>
        <aside className={style.aside}>
          <h1>Start helping!</h1>
          <h1>Give unwanted things in good hands</h1>
          <img
            src={decoration}
            className={style.decoration}
            alt="decoration"
          ></img>
          <div className={style.buttons}>
            <button>Give things</button>
            <button>Organise donation</button>
          </div>
        </aside>
      </header>
    </>
  );
};

export default Header;
