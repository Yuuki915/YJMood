import React from "react";

export default function NewItem(props) {
  return (
    <div className="new-item">
      <div className="new-item-img-container">
        <img src={props.src} alt="" className="new-item-img" />
      </div>
      <div className="new-item-details">
        <p className="item">{props.item} </p>
        <p className="plice">{`C$ ${props.plice}`}</p>
      </div>
    </div>
  );
}
