import { createContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";
import "../styles/Header.css";
import Contact from "./particles/Contact";
import { useState } from "react";

const Header = ({ func, aboutFun }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onPress = () => {
    navigate("/");
    aboutFun();
  };

  const navigateToPage = (path) => {
    if (path !== location.pathname) {
      func();
      setTimeout(() => {
        navigate(path);
      }, 500);
    }
  };

  return (
    <div className="header-cont">
      <div className="d-flex align-items-center gap-3 ">
        <img src="initial.png" className="logo" />
        <p className="open-to-work">: : Open for work : :</p>
      </div>
      <div className="d-flex gap-3 align-items-center">
        <NavLink
          onClick={() => navigateToPage("/")}
          className={`${
            location.pathname == "/" ? "PageActive" : ""
          } header-link d-none d-md-block`}
        >
          Home
        </NavLink>
        <a
          onClick={onPress}
          style={{ cursor: "pointer" }}
          className="header-link d-none d-md-block"
        >
          About
        </a>
        <NavLink
          onClick={() => navigateToPage("/skills")}
          className={`${
            location.pathname == "/skills" ? "PageActive" : ""
          } header-link d-none d-md-block`}
        >
          Skills
        </NavLink>
        <NavLink
          onClick={() => navigateToPage("/projects")}
          className={`${
            location.pathname == "/projects" ? "PageActive" : ""
          } header-link d-none d-md-block`}
        >
          Recent Works
        </NavLink>

        <button
          className=" d-none d-md-block contact-header-link btn btn-secondary"
          type="submit"
          onClick={() => setShow(true)}
        >
          Let's Talk
        </button>
      </div>
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
