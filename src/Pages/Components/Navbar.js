import "./Stylesheets/Navbar.css";
import React from "react";
import SideDrawer from "./SideDrawer";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="navbar" sticky="top">
      <div className="navbar-logo-container">
        <Link
          className="navbar-brand"
          to="home-page"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Akshat Gadodia
        </Link>
      </div>
      <div className="navbar-buttons-container">
        <div className="navbar-links-container">
          <Link
            className="navbar-link"
            activeClass="navbar-link-active"
            to="profile"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Profile
          </Link>
          <Link
            className="navbar-link"
            activeClass="navbar-link-active"
            to="education"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Education
          </Link>
        </div>
        <SideDrawer />
      </div>
    </header>
  );
};

export default Navbar;
