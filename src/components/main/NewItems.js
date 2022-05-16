import React from "react";
import NewItem from "./NewItem";
import data from "../../data/new-data.json";

export default function NewItems() {
  const newItems = data;

  return (
    <div className="toppage-items">
      <div className="items-title">
        <h3>New Items</h3>
        <hr />
      </div>
      <div className="item-cards">
        {newItems.map((item) => (
          <div key={item.id}>
            <NewItem
              id={item.id}
              image={item.img}
              title={item.title}
              price={item.price}
              colors={item.colors}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
