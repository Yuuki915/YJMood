import React from "react";
import PopularItem from "./PopularItem";

import newItemImg1 from "../../images/newItems.webp";

export default function PopularItems() {
  const popularItems = [
    {
      id: 1,
      src: newItemImg1,
      item: "Lamb Fleece Lined Pant",
      price: "73.60",
    },
    {
      id: 2,
      src: newItemImg1,
      item: "Lamb Fleece Lined Sweatshirt",
      price: "70.53",
    },
    {
      id: 3,
      src: newItemImg1,
      item: "Luid Sweatshirt",
      price: "33.73",
    },
    {
      id: 4,
      src: newItemImg1,
      item: "Monaco Trench Coat",
      price: "193.18",
    },
    {
      id: 5,
      src: newItemImg1,
      item: "Field Slim Skirt",
      price: "61.23",
    },
    {
      id: 6,
      src: newItemImg1,
      item: "Fleece Sandiego Jogger Set",
      price: "64.60",
    },
  ];

  return (
    <div className="toppage-items">
      <div className="items-title">
        <h3>Most Wanted</h3>
        <hr />
      </div>
      <div className="item-cards">
        {popularItems.map((popularItem) => (
          <PopularItem
            key={popularItem.id}
            src={popularItem.src}
            item={popularItem.item}
            price={popularItem.price}
          />
        ))}
      </div>
    </div>
  );
}
