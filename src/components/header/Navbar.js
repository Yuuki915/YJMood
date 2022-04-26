import React, { useState } from "react";
import { Link } from "react-router-dom";
import hamImg from "../../images/pickup1.jpg";

export default function Navbar(props) {
  const navMenu = [
    { menu: "New", hamImg: hamImg, delay: 1 },
    { menu: "Sale", hamImg: hamImg, delay: 2 },
    { menu: "Tops", hamImg: hamImg, delay: 3 },
    { menu: "Bottoms", hamImg: hamImg, delay: 4 },
    { menu: "Dresses", hamImg: hamImg, delay: 5 },
    { menu: "Outer", hamImg: hamImg, delay: 6 },
    { menu: "Accessories", hamImg: hamImg, delay: 7 },
    { menu: "Set", hamImg: hamImg, delay: 8 },
    { menu: "Pajamas", hamImg: hamImg, delay: 9 },
    { menu: "Men", hamImg: hamImg, delay: 10 },

    // "19.99",
    // "Fast delivery",
  ];

  return (
    <nav className="navbar">
      <div className={`${props.hamClass}-dark`} onClick={props.closeMenu}></div>
      <ul className={`nav-menu ${props.hamClass}`}>
        {navMenu.map((nav, key) => (
          <li
            key={key}
            className={`menu ${props.hamClass}-li ${props.hamClass}-${nav.delay}`}
            onClick={() => props.isMobile && props.closeMenu()}
          >
            <Link to={`/${nav.menu}`}>
              <img
                src={nav.hamImg}
                alt=""
                className={`ham-img ${props.hamClass}-img`}
              />
            </Link>
            <Link to={`/${nav.menu}`}>{nav.menu}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
