import React from "react";
import NewItems from "./NewItems";
import PickupItems from "./PickupItems";
import PopularItems from "./PopularItems";

import "./Main.css";
import SnsIcons from "./SnsIcons";

export default function Main() {
  return (
    <div className="main">
      <SnsIcons />

      <PickupItems />

      <NewItems />

      <PopularItems />
    </div>
  );
}
