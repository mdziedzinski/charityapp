import React from "react";
import style from "../scss/components/ThreeCols.module.scss";

const ThreeCols = () => {
  return (
    <article className={style.article}>
      <div className={style.column}><h1>10</h1><h3>Donated bags</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, culpa.</p></div>
      <div className={style.column}><h1>5</h1><h3>Supported charities</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, culpa.</p></div>
      <div className={style.column}><h1>7</h1><h3>Organised donations</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, culpa.</p></div>
    
    </article>
  );
};

export default ThreeCols;
