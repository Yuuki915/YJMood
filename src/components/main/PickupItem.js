import React from "react";
import Button from "../buttoms/Button";

import "./PickupItem.css";

export default function PickupItem(props) {
  return (
    <div className={`pickup-item ${props.class}`}>
      {/* <div className=""> */}
      <img
        className={`pickup-item-bg-img ${props.class}-bg-img`}
        src={props.src2}
        alt=""
      />
      {/* </div> */}
      <div className={`pickup-item-img-container ${props.class}-img-container`}>
        <img
          className={`pickup-item-img ${props.class}-img`}
          src={props.src}
          alt=""
        />
      </div>
      <div className={`pickup-item-texts ${props.class}-texts`}>
        <h2>{props.h2}</h2>
        <Button btn={props.btn} />
      </div>
    </div>
  );
}
