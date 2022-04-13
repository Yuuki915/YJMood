import React from "react";
import productImg from "../../images/newItems.webp";
import Color from "./Color";

import "./Product.css";
import Quantity from "./Quantity";

export default function Product() {
  const productImgs = [productImg];
  return (
    <div className="product">
      <div className="product-detail">
        <section className="product-detail-img">
          <img src={productImgs} alt="" />
        </section>

        <section className="product-detail-options">
          <div>
            <h3 className="product-name">Product name</h3>
            <p className="product-plice">C$--.--</p>
          </div>

          <Color />

          <Quantity />

          <button className="btn add-cart-btn">Add To Cart</button>
        </section>
      </div>
    </div>
  );
}
