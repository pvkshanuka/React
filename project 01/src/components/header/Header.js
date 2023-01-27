import React from "react";
import HeaderItem from "../headerItem/HeaderItem";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <div className="headerBox">
        <HeaderItem title="Item" no="01"/>
        <HeaderItem title="Item" no="02"/>
        <HeaderItem title="Item" no="03"/>
        <HeaderItem title="Item" no="04"/>
      </div>
    </div>
  );
}
