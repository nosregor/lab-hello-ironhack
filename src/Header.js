import React from "react";
import "./header.css";

const Header = props => {
  return (
    <div className="header">
      <img src="../images/ironhack-logo.svg" />
      <img src="../images/menu-top.svg" />
      <div className="header-container">
        <div className="header-title">
          <h1>Say Hello to ReactJS</h1>
        </div>
        <div className="header-subtitle">
          <h3>
            You will learn a Frontend framework from scratch, to become a Ninja
            Developer
          </h3>
        </div>
        <div className="header-btn">
          <a href="./">Awesome!</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
