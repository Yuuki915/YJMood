import React from "react";
import NewItem from "./NewItem";

import newItemImg1 from "../../images/newItems.webp";

import "./NewItems.css";

export default function NewItems() {
  const newItems = {
    srces: [
      newItemImg1,
      newItemImg1,
      newItemImg1,
      newItemImg1,
      newItemImg1,
      newItemImg1,
    ],
    items: [
      "Lamb Fleece Lined Pant",
      "Lamb Fleece Lined Sweatshirt",
      "Luid Sweatshirt",
      "Monaco Trench Coat",
      "Field Slim Skirt",
      "Fleece Sandiego Jogger Set",
    ],
    plices: ["73.60", "70.53", "33.73", "193.18", "61.23", "64.60"],
  };

  return (
    <div className="new-items">
      <div className="new-items-titles">
        <h2>NEW ITEMS</h2>
        <p>5% DISCOUNT</p>
      </div>

      <NewItem />
    </div>
  );
}
