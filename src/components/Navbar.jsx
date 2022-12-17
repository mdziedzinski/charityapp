import React from "react";
import style from "../scss/components/Navbar.module.scss";
import { NavLink, useResolvedPath, useMatch } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className={style.nav}>
        <NavLink to="/" className={style.link} end>
          Start
        </NavLink>
        <Link
          className={style.link}
          activeClass={style.active}
          spy={true}
          smooth={true}
          offset={-1}
          duration={200}
          to="whatisit"
        >
          What is it?
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-1}
          duration={200}
          to="aboutus"
          className={style.link}
        >
          About us
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-1}
          duration={200}
          to="organizations"
          className={style.link}
        >
          Foundations and organizations
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-1}
          duration={200}
          to="contact"
          className={style.link}
        >
          {" "}
          Contact
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
