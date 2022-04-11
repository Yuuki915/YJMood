import React from "react";

export default function NewItem(props) {
  return (
    <div className="toppage-item">
      <div className="toppage-item-img-container">
        <a href="/">
          <img src={props.src} alt="" className="toppage-item-img" />
        </a>
      </div>
      <div className="toppage-item-details">
        <p className="item">{props.item} </p>
        <p className="plice">{`C$ ${props.plice}`}</p>
      </div>
    </div>
  );
}
