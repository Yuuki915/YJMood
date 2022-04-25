import React, { useState } from "react";
import "./Product.css";

function SizeOption(props) {
  return (
    <div className="quantity-in-product">
      <h6 className="h6">SizeOption</h6>
      {props.item != null
        ? props.item.size.map((size) => <div>{size.sizeName}</div>)
        : ""}
    </div>
  );
}
export default SizeOption;
