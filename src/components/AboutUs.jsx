import React from "react";
import style from "../scss/components/AboutUs.module.scss";
import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";
import people from "../assets/People.jpg";

const AboutUs = () => {
  return (
    <article className={style.article} id="aboutus">
      <div className={style.column}>
        <h2>About us</h2>
        <img
          src={decoration}
          className={style.decoration}
          alt="decoration"
        ></img>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem neque
          numquam vel qui repellat sunt eius maiores, non deleniti itaque. Lorem
          ipsum dolor sit amet.
        </p>
        <img src={signature} className={style.signature} alt="signature"></img>
      </div>
      <div className={style.column}>
        <img src={people} className={style.people} alt="people"></img>
      </div>
    </article>
  );
};

export default AboutUs;
