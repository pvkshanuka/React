import React from "react";
import HeaderItem from "../headerItem/HeaderItem";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="headerBox">
        <NavLink exact to="/" className="item"><HeaderItem title="Home" no="H"/></NavLink>
        <NavLink to="/about" className="item"><HeaderItem title="About" no="A" /></NavLink>
        <NavLink to="/contacts" className="item"><HeaderItem title="Contacts" no="C" /></NavLink>
      </div>
    </div>
  );
}
