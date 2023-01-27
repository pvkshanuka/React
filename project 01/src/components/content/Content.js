import React from "react";
import "./Content.css";

export default function Content(props) {

  return (
    <div className="phara">
      <p>{props.name} {props.content} <br/>{props.children}</p>
      
    </div>
  );
}
