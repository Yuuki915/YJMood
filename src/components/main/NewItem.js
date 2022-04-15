import React from "react";

export default function NewItem(props) {
  return (
    <div className="page-item">
      <div className="item-img-container">
        <a href="/">
          <img src={props.src} alt="" className="item-img" />
        </a>
      </div>
      <div className="item-details">
        <p className="item">{props.item} </p>
        <p className="plice">{`C$ ${props.plice}`}</p>
      </div>
    </div>
  );
}
