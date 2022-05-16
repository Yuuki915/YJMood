import React, { useState } from "react";
import productImg from "../../images/newItems.webp";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Color from "./Color";
import Quantity from "./Quantity";
import SizeOption from "./SizeOption";
// import data from "../data/new-data.json";

import "./Product.css";

function Product(props) {
  const [productColor, setProductColor] = useState(null);
  const [productQuantity, setProductQuantity] = useState(0);
  let item = null;

  const handleSelectOption = (id) => {
    item = props.colors.find((item) => item.colorId === id);
    console.log(item);
  };
  const productImgs = [productImg];
  return (
    <div className="product">
      <Header />
      <div className="product-detail">
        <section className="product-detail-img">
          <img src={productImgs} alt="" />
        </section>

        <section className="product-detail-options">
          <div>
            <h3 className="product-name">{props.title}</h3>
            <p className="product-price">C$ {props.price}</p>
          </div>

          {props.colors.length !== 0 ? (
            <>
              <Color
                colors={props.colors}
                handleSelectOption={handleSelectOption}
              />
            </>
          ) : (
            <></>
          )}
          <SizeOption item={item} />
          <Quantity />

          <button className="btn add-cart-btn">Add To Cart</button>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
