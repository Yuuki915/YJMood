import React from "react";
import Button from "../buttoms/Button";
import "./Header.css";
import Navbar from "./Navbar";
import ShoppingBtn from "./ShoppingBtn";

export default function Header() {
  // const hoverNav = {
  //   OUTER: ["Cardigans", "Jackets", "Coats"],
  //   TOPS: [
  //     "Hoodies & Sweatshirts",
  //     "T-shirts & Tank Tops",
  //     "Shirts & Blouses",
  //     "Knitwears",
  //     "Vest",
  //   ],
  //   BOTTOMS: ["Jeans", "Pants", "Skirts"],
  //   MEN: ["Outer", "Tops", "Bottoms"],
  //   ACC: ["Shoes & Bags", "Jewerly", "Other Accessories"],
  //   MORE: ["Subscribers03", "Products", "My subscriptions"],
  // };

  return (
    <div className="header">
      <div className="header-top">
        <h1>YJMOOD</h1>
        <div className="header-contact">Contact</div>

        <ShoppingBtn />
      </div>

      <Navbar />
    </div>
  );
}
