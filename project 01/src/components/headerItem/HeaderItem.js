import React from "react";
import "./HeaderItem.css";

export default function HeaderItem(props) {
  return (
      <div className="">{props.title} {props.no}</div>
  );
}
