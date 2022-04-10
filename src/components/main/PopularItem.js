import React from "react";

export default function PopularItem(props) {
  return (
    <div className="toppage-item">
      <div className="toppage-item-img-container">
        <img src={props.src} alt="" className="toppage-item-img" />
      </div>
      <div className="toppage-item-details">
        <p className="item">{props.item} </p>
        <p className="plice">{`C$ ${props.plice}`}</p>
      </div>
    </div>
  );
}
