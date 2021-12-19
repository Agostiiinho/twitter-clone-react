import React from "react";
import "./App.css";

function Tweet({ name, message, likes }) {
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <h5>❤ {likes}</h5>
    </div>
  );
}

export default Tweet;
