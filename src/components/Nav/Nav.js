import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand" id="brand">
          Clicky the MOPAR Game!
        </a>
        <h4 className="nav navbar-text navbar-left">Click a MOPAR's image to begin!</h4> 
        <h4 className="nav navbar-text navbar-right">Score: 0 | Top Score: 0</h4> 
      </div>
    </div>
  </nav>
);

export default Nav;