import React from "react";
import "./HeaderItem.css";

export default function HeaderItem(props) {
  return (
    <a className="item">
      <span className="text">{props.title} {props.no}</span>
    </a>
  );
}
