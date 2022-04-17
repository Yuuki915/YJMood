import React from "react";
import { Link } from "react-router-dom";
import hamImg from "../../images/pickup1.jpg";

export default function Navbar(props) {
  const navMenu = [
    { menu: "New", hamImg: hamImg },
    { menu: "Sale", hamImg: hamImg },
    { menu: "Tops", hamImg: hamImg },
    { menu: "Bottoms", hamImg: hamImg },
    { menu: "Dresses", hamImg: hamImg },
    { menu: "Outer", hamImg: hamImg },
    { menu: "Accessories", hamImg: hamImg },
    { menu: "Set", hamImg: hamImg },
    { menu: "Pajamas", hamImg: hamImg },
    { menu: "Men", hamImg: hamImg },

    // "19.99",
    // "Fast delivery",
  ];

  return (
    <nav className="navbar">
      <div className={`${props.hamClass}-dark`} onClick={props.closeMenu}></div>
      <ul className={`navMenu ${props.hamClass}`}>
        {navMenu.map((nav, key) => (
          <li
            key={key}
            className={`menu ${props.hamClass}-li`}
            onClick={() => props.isMobile && props.closeMenu()}
          >
            <img
              src={nav.hamImg}
              alt=""
              className={`ham-img ${props.hamClass}-img`}
            />
            <Link to={`/${nav.menu}`}>{nav.menu}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
