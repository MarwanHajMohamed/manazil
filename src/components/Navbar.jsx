import React, { useState, useRef, useCallback, useEffect } from "react";
import "../css/navbar.css";
import LogoImage from "../css/assets/Logo-Image.png";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");
  const [scrollUp, setScrollUp] = useState(false);

  const handleNavToggle = () => {
    const state = toggle;
    setToggle(!state);
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
      top: elementPosition - 120,
      behavior: "smooth",
    });
  };
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <div className="left-side">
          <img
            src={LogoImage}
            alt="Manazil"
            onClick={() => handleNavItemClick("home")}
          />
          <div className="logo-two">ENGINEERING CONSULTANCY LTD UK</div>
        </div>
        <div className="right-side">
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
              className={active === "services" ? "active" : ""}
              onClick={() => handleNavItemClick("services")}
            >
              Services
            </li>
            <li
              className={active === "about" ? "active" : ""}
              onClick={() => handleNavItemClick("about")}
            >
              About
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
