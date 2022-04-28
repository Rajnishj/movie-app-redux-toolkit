import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/icon.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-img">
        <img src={user} alt="user"></img>
      </div>
    </div>
  );
};

export default Header;
