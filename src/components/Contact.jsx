import React, { useState } from "react";
import style from "../scss/components/Contact.module.scss";
import decoration from "../assets/Decoration.svg";
import Footer from "./Footer";
const Contact = () => {
  return (
    <div className={style.wrapper} id="contact">
      <div className={style.container}>
        <h2>Contact us</h2>
        <img src={decoration} alt="decoration" />
        <form>
          <label className={style.name}>Type your name:</label>
          <input
            className={style.name}
            type="text"
            name="name"
            placeholder="Krzysztof"
          />{" "}
          <label className={style.emailLabel}>Type your e-mail </label>
          <input
            className={style.emailInput}
            type="email"
            name="email"
            placeholder="test@gmail.com"
          />
          <label>Type your message</label>
          <input
            className={style.textArea}
            type="text-area"
            name="text"
            placeholder=" Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.."
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
