import React from "react";
import NewItem from "./NewItem";

import newItemImg1 from "../../images/newItems.webp";

export default function NewItems() {
  const newItems = [
    {
      id: 1,
      src: newItemImg1,
      item: "Lamb Fleece Lined Pant",
      plice: "73.60",
    },
    {
      id: 2,
      src: newItemImg1,
      item: "Lamb Fleece Lined Sweatshirt",
      plice: "70.53",
    },
    {
      id: 3,
      src: newItemImg1,
      item: "Luid Sweatshirt",
      plice: "33.73",
    },
    {
      id: 4,
      src: newItemImg1,
      item: "Monaco Trench Coat",
      plice: "193.18",
    },
    {
      id: 5,
      src: newItemImg1,
      item: "Field Slim Skirt",
      plice: "61.23",
    },
    {
      id: 6,
      src: newItemImg1,
      item: "Fleece Sandiego Jogger Set",
      plice: "64.60",
    },
  ];

  return (
    <div className="toppage-items">
      <div className="items-title">
        <h3>New Items</h3>
        <hr />
      </div>
      <div className="item-cards">
        {newItems.map((newItem) => (
          <NewItem
            key={newItem.id}
            src={newItem.src}
            item={newItem.item}
            plice={newItem.plice}
          />
        ))}
      </div>
    </div>
  );
}
