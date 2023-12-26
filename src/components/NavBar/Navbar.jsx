import React, { useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/sagar.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  // console.log(showMenu);
  return (
    <nav className="navbar">
      <Link to="intro" smooth={true} duration={500} offset={-100}>
        <img src={logo} alt={logo} className="logo" />
      </Link>

      <div className="desktopMenu">
        <Link
          to="intro"
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>

        <Link
          to="skills"
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          to="works"
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          offset={-40}
          duration={500}
          className="desktopMenuListItem"
        >
          Contact Me
        </Link>
      </div>

      {/* ================= */}

      {showMenu ? (
        <FaTimes
          className="close"
          size={40}
          style={{ display: showMenu ? "flex" : "none" }}
          onClick={() => setShowMenu(!showMenu)}
        />
      ) : (
        <FaBars
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
          size={40}
        />
      )}

      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          to="intro"
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
        >
          Home
        </Link>

        <Link
          to="skills"
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
        >
          About
        </Link>
        <Link
          to="works"
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
