import React from "react";
import "./styles.css";

export default function Display(props) {
  return (
    <div className="display">
      <video key={props.video} className="video" controls autoPlay>
        <source src={props.video} />
        <p>Your browser cannot display video</p>
      </video>
      {/* <p style={{color:"white"}}>{props.text}</p> */}
    </div>
  );
}
