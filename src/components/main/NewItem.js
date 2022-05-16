import React from "react";
import { Link } from "react-router-dom";

export default function NewItem(props) {
  return (
    <div className="page-item">
      <div className="item-img-container">
        <Link to={`/product/${props.id}`}>
          <img src={props.image} alt="" className="item-img" />
        </Link>
      </div>
      <div className="item-details">
        <p className="item">{props.title} </p>
        <p className="price">{`C$ ${props.price}`}</p>
        <div className="colors">
          {props.colors.length !== 0 ? (
            <div className="color-box">
              {props.colors.map((color) => (
                <div key={color.colorId}>
                  <li>
                    <div
                      className="color-circle"
                      style={{
                        backgroundColor: color.colorName,
                      }}
                    ></div>
                  </li>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
