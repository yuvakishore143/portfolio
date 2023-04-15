import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";

import "../styles/Header.css";
import Contact from "./particles/Contact";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="header-cont">
      <NavLink className="header-link d-none d-md-block " to="/home">
        HOME
      </NavLink>
      <NavLink className="header-link d-none d-md-block" to="/about">
        ABOUT
      </NavLink>
      <p className="open-to-work">: : Open for work : :</p>
      <button
        className=" d-none d-md-block contact-header-link btn btn-secondary"
        type="submit"
        onClick={() => setShow(true)}
      >
        Let's Talk
      </button>
      <Contact show={show} onHide={() => setShow(false)} />

      {/* small-devices */}
      <NavLink className="header-link  d-md-none" to="/">
        <AiOutlineHome />
      </NavLink>
      <NavLink className="header-link d-md-none" to="/about">
        <IoIosContact />
      </NavLink>
      <NavLink className="header-link  d-md-none" to="/contact">
        <FcAbout />
      </NavLink>
    </div>
  );
};

export default Header;
