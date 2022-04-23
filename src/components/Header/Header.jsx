import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="logo_wrapper">
        <img src="./logo512.png" alt="" />
      </div>
      <div className="login-block">
        {props.isAuth ? (
          <div>
            {props.login}&nbsp;<button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
