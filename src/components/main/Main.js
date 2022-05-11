import React from "react";
import NewItems from "./NewItems";
import PickupItems from "./PickupItems";
import PopularItems from "./PopularItems";

import "./Main.css";
import SnsIcons from "./SnsIcons";
import Products from "../pages/Products";

export default function Main() {
  const mainIconClass = ["sns-icons-container", "sns-icon"];

  return (
    <div className="main">
      <Products />
      <SnsIcons class={mainIconClass[0]} class2={mainIconClass[1]} />
      <PickupItems />
      <NewItems />
      {/* <PopularItems /> */}
      <div className="company-name">#YJMOOD</div>
    </div>
  );
}
