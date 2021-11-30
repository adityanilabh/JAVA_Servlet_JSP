import React from "react";
import { NavLink } from "react-router-dom";
export default function Menu() {
  return (
    <div>
      <NavLink activeClassName="activeClass" to="/about">
        About US
      </NavLink>
      <NavLink activeClassName="activeClass" to="/contact">
        Contact US
      </NavLink>
    </div>
  );
}
