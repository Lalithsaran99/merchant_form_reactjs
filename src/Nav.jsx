import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () =>{
    return(
      <>
      <title>Merchant Form</title>
    <div class="header">
    <NavLink aria-current="page" to="/" class="logo">NewBusiness</NavLink>
      <div class="header-right">
          <NavLink className="nav-link"  aria-current="page" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/Tab">Table</NavLink>
          <a href="#about">About</a>
      </div>
     </div>
     </>
    );
  };
  export default Nav;