import React from "react";
import Content from "../components/content/Content";
import Header from "../components/header/Header";

export default function Contacts() {
  return (
    <div>
      <Header />
      <h1>Contacts Page</h1>
      <Content name="Kusal" content="name and content are parent props. The href attribute is required for an anchor to be keyboard accessible. The href attribute is required for an anchor to be keyboard accessible. The href attribute is required for an anchor to be keyboard accessible. The href attribute is required for an anchor to be keyboard accessible. The href attribute is required for an anchor to be keyboard accessible."><a href='#'>Click here (This is a child prop)</a></Content>
      <Content name="Dinesh" content="name and content are parent props. The href attribute is required for an anchor to be keyboard accessible."><a href='#'>Click here (This is a child prop)</a></Content>
    </div>
  );
}
