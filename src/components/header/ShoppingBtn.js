import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function ShoppingBtn() {
  return (
    <div className="ShoppingBtns">
      <div className="login-btn">
        <FontAwesomeIcon
          className={`login-icon`}
          icon={faCircleUser}
          size="2x"
        />
        <p>login</p>
      </div>
      <div className="cart-btn">Cart</div>
    </div>
  );
}
