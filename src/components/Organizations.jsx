import React from "react";
import style from "../scss/components/Organizations.module.scss";
import decoration from "../assets/Decoration.svg";


const Organizations = () => {
  return (
    <div className={style.container}>
      <h1>Who do we help</h1>
      <img src={decoration} className={style.decoration} alt="decoration"></img>
      <div className={style.buttons}>
        <button>Foundations</button>
        <button>NGOs</button>
        <button>Local charities</button>
      </div>
    </div>
  );
};

export default Organizations;
