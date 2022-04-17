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
      {/* <div className="hum"> */}
      {/* <input type="checkbox" id="humberger" />
        <label for="humberger">
          <div className="lines">
            <span className="line1"></span>
            <span className="line2"></span>
          </div>
        </label>
        <label className="light-dark" for="humberger"></label> */}

      {/* <ul className="menu-in-hum">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/">Shopping</a>
            <ul>
              <li>
                <a href="/">ピアス</a>
              </li>
              <li>
                <a href="/">イヤリング</a>
              </li>
              <li>
                <a href="/">ヘアゴム</a>
              </li>
              <li>
                <a href="/">リング</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Activities</a>
          </li>
        </ul> */}
      {/* </div> */}
    </div>
  );
}
