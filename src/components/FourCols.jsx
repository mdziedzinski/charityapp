import React from "react";
import style from "../scss/components/FourCols.module.scss";
import decoration from "../assets/Decoration.svg";
import icon1 from "../assets/Icon-1.svg";
import icon2 from "../assets/Icon-2.svg";
import icon3 from "../assets/Icon-3.svg";
import icon4 from "../assets/Icon-4.svg";

const FourCols = () => {
  return (
    <div className={style.container}>
      <h1>It takes just 4 simple steps</h1>
      <img src={decoration} className={style.decoration} alt="decoration"></img>

      <article className={style.article}>
        <div className={style.column}>
          <img src={icon1} className={style.svg} alt="things"></img>
          <h3>Choose a thing</h3>
          <hr></hr>
          <p>clothes, toys, hardware or others</p>
        </div>
        <div className={style.column}>
          <img src={icon2} className={style.svg} alt="things"></img>
          <h3>Wrap it</h3>
          <hr></hr>
          <p>you can use trashbags</p>
        </div>
        <div className={style.column}>
          <img src={icon3} className={style.svg} alt="things"></img>
          <h3>Select the recipient</h3>
          <hr></hr>
          <p>find trusted place</p>
        </div>
        <div className={style.column}>
          <img src={icon4} className={style.svg} alt="things"></img>
          <h3>Order the pickup </h3>
          <hr></hr>
          <p>courier will pickup the package in convenient hours</p>
        </div>
      </article>
      <div>
        <button>Give things</button>
      </div>
    </div>
  );
};

export default FourCols;
