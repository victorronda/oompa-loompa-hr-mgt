import React from "react";
import { LOGO_OOMPA_LOOMPA_URL } from "../../../constants";
import { Link } from "react-router-dom";
import './NavBar.css';
import Header from "../Header/Header";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={LOGO_OOMPA_LOOMPA_URL} alt="Oompa Loompa Logo" />
      </Link>
      <Header title="Oompa Loompa's Crew" classNames="navbar-header" />
    </nav>
  );
};

export default NavBar;
