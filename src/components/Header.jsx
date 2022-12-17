import React from "react";
import style from "../scss/components/Header.module.scss";
import hero from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
const Header = () => {
  return (
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
  );
};

export default Header;
