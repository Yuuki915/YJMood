import React, { useState } from "react";
import "./Product.css";

export default function Quantity() {
  const [productAmount, setProductAmount] = useState(1);
  return (
    <div className="quantity-in-product">
      <h6 className="h6">Quantity</h6>
      <input
        className="quantity-input"
        type="number"
        value={productAmount}
        onChange={(e) => setProductAmount(e.target.value)}
      />
    </div>
  );
}
