import React from "react";
import PickupItem from "./PickupItem";
import Pickup1 from "../../images/pickup1.jpg";
import Pickup2 from "../../images/pickup2.jpg";
import Pickup3 from "../../images/pickup3.png";
import Pickup3Bg from "../../images/pickup3-bg.jpg";
import Pickup4_1 from "../../images/pickup4-1.jpg";
import Pickup4_2 from "../../images/pickup4-2.jpg";

export default function PickupItems() {
  const items = {
    texts: [
      "Check out our season off sale",
      "& FREE PICK UP AT AROMTAREAR (COQUITLAM LOUGHEED",
      "NO CODE NEEDED",
    ],
    src: [Pickup1, Pickup2, Pickup3, Pickup3Bg, Pickup4_2, Pickup4_1],
    h2: ["THE BUTTERFLY CROP TOP", "HAJI BOLERO CARDIGAN", "SET SERIES"],
    btn: [
      "SHOP ALL PRODUCTS",
      "SHOP ALL OUTER",
      "SHOP KNITWEAR ITEMS",
      "SHOP SET ITEMS",
    ],
  };
  const classNames = {
    pickup1: "add1",
    pickup2: "add2",
    pickup3: "add3",
    pickup4: "add4",
  };
  return (
    <div className="pickupItems">
      <PickupItem
        src={items.src[0]}
        btn={items.btn[0]}
        class={classNames.pickup1}
      />

      {/* <h1 className="pickup-h1">What to wear in F/W</h1> */}

      <PickupItem
        src={items.src[1]}
        h2={items.h2[0]}
        btn={items.btn[1]}
        class={classNames.pickup2}
      />
      <PickupItem
        src={items.src[2]}
        src2={items.src[3]}
        h2={items.h2[1]}
        btn={items.btn[2]}
        class={classNames.pickup3}
      />
      <PickupItem
        src={items.src[4]}
        src2={items.src[5]}
        h2={items.h2[2]}
        btn={items.btn[3]}
        class={classNames.pickup4}
      />
    </div>
  );
}
