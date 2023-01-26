import React from "react";
import "./Content.css";

export default function Content() {
  const contentFirst = "Text, and ";
  const content = "ipsum dolor sit amet consectetur adipisicing elit. Non porro quidem veritatis? Vel, minus omnis delectus excepturi maiores obcaecati, laborum aspernatur odio dignissimos enim, molestiae corrupti tempore repellendus amet eos.";

  return (
    <div className="phara">
      <p>{contentFirst} {content}</p>
    </div>
  );
}
