import React, { useState, useCallback, useEffect } from "react";
import "../css/navbar.css";
import LogoImage from "../css/assets/Logo-Image.png";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");
  const [scrollUp, setScrollUp] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const handleNavToggle = () => {
    setToggle(!toggle);
  };

  const handleNavItemClick = (item) => {
    handleNavToggle();
    handleScroll(item);
  };

  const scroll = useCallback(() => {
    document.addEventListener("scroll", () => {
      const navArray = ["home", "objectives", "services", "about", "contact"];

      if (window.pageYOffset > 300) {
        setScrollUp(true);
      } else setScrollUp(false);

      navArray.forEach(async (element) => {
        if (window.innerHeight < 500) setActive("home");
        if (window.innerHeight > (await getPos(element))) setActive(element);
      });
    });
  }, []);

  useEffect(() => {
    scroll();
  }, [scroll]);

  const getPos = async (id) => {
    const element = await document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().bottom;

    return elementPosition;
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().top;
    setActive(id);

    window.scrollBy({
      top: elementPosition - 90,
      behavior: "smooth",
    });
  };

  const changeNavBg = () => {
    window.scrollY >= 400 ? setNavBg(true) : setNavBg(false);
  };

  window.addEventListener("scroll", changeNavBg);

  return (
    <div className="navbar-wrapper" onScroll={changeNavBg}>
      <div className={navBg ? "navbar-container white" : "navbar-container"}>
        <div className="left-side">
          <img
            src={LogoImage}
            alt="Manazil"
            onClick={() => handleNavItemClick("home")}
            className={navBg ? "" : "hide"}
          />
          <div className={navBg ? "logo-two" : "logo-two hide"}>
            ENGINEERING CONSULTANCY LTD UK
          </div>
        </div>
        <div className="hamburger" onClick={handleNavToggle}>
          {!toggle ? (
            <i class="fa-solid fa-bars"></i>
          ) : (
            <i class="fa-solid fa-xmark"></i>
          )}
          {/* HTML code for the hamburger icon */}
        </div>
        <div className={`right-side ${toggle ? "open" : ""}`}>
          <ul className="list-container">
            <li
              className={active === "home" ? "active" : ""}
              onClick={() => handleNavItemClick("home")}
            >
              Home
            </li>
            <li
              className={active === "objectives" ? "active" : ""}
              onClick={() => handleNavItemClick("objectives")}
            >
              Objectives
            </li>
            <li
              className={active === "about" ? "active" : ""}
              onClick={() => handleNavItemClick("about")}
            >
              About
            </li>
            <li
              className={active === "services" ? "active" : ""}
              onClick={() => handleNavItemClick("services")}
            >
              Services
            </li>
            <li
              className={active === "contact" ? "active" : ""}
              onClick={() => handleNavItemClick("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
