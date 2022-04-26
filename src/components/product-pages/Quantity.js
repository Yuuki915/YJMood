import React, { useState } from "react";
import "./Product.css";

export default function Quantity(props) {
  const [productAmount, setProductAmount] = useState(props.color);

  return (
    <div className="quantity-in-product">
      <h6 className="h6">Quantity</h6>
      <div>{props.selectedColor}</div>
      <input
        className="quantity-input"
        type="number"
        value={productAmount}
        onChange={(e) => setProductAmount(e.target.value)}
      />
    </div>
  );
}
