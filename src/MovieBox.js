import React from "react";
import "./styles.css";

export default function MovieBox(props) {
  return (
    <div>
      <img
        className="img"
        src={props.img}
        onClick={props.onclick}
        alt="images"
      />
      <p>{props.text}</p>
    </div>
  );
}
