import React from "react";

import productImg from "../../images/newItems.webp";

import "./Product.css";

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

          <div className="colors">
            <h6 className="h6">Color</h6>
            <div className="color-options">
              <p>白</p>
              <p>黒</p>
            </div>
          </div>

          <div className="quantity">
            <h6 className="h6">Quantity</h6>
            <div>Counter</div>
          </div>

          <button className="btn add-cart-btn">Add To Cart</button>
        </section>
      </div>
    </div>
  );
}
