import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faBagShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Burger from "./Burger";

export default function ShoppingBtn() {
  return (
    <div className="ShoppingBtns">
      {/* <p>Contact</p> */}

      <div className="login-btn">
        <FontAwesomeIcon
          className={`login-icon`}
          icon={faCircleUser}
          size="2x"
        />
        <FontAwesomeIcon className={`favorite-icon`} icon={faHeart} size="2x" />
        <FontAwesomeIcon
          className={`cart-icon`}
          icon={faBagShopping}
          size="2x"
        />
      </div>

      <Burger />
    </div>
  );
}
