import React from "react";
import style from "../scss/components/FourCols.module.scss";
import decoration from "../assets/Decoration.svg";

const FourCols = () => {
  return (
    <div className={style.container}>
      <h1>It takes just 4 simple steps</h1>
      <img src={decoration} className={style.decoration} alt="decoration"></img>

      <article className={style.article}>
        <div className={style.column}>
          <h1>10</h1>
          <h3>Donated bags</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            culpa.
          </p>
        </div>
        <div className={style.column}>
          <h1>5</h1>
          <h3>Supported charities</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            culpa.
          </p>
        </div>
        <div className={style.column}>
          <h1>7</h1>
          <h3>Organised donations</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            culpa.
          </p>
        </div>
      </article>
    </div>
  );
};

export default FourCols;
