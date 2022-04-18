import React from "react";
import { Link } from "react-router-dom";
import hamImg from "../../images/pickup1.jpg";
import { motion } from "framer-motion";

export default function Navbar(props) {
  const navMenu = [
    { menu: "New", hamImg: hamImg, delay: 0.05 },
    { menu: "Sale", hamImg: hamImg, delay: 0.1 },
    { menu: "Tops", hamImg: hamImg, delay: 0.15 },
    { menu: "Bottoms", hamImg: hamImg, delay: 0.2 },
    { menu: "Dresses", hamImg: hamImg, delay: 0.25 },
    { menu: "Outer", hamImg: hamImg, delay: 0.3 },
    { menu: "Accessories", hamImg: hamImg, delay: 0.35 },
    { menu: "Set", hamImg: hamImg, delay: 0.4 },
    { menu: "Pajamas", hamImg: hamImg, delay: 0.45 },
    { menu: "Men", hamImg: hamImg, delay: 0.5 },

    // "19.99",
    // "Fast delivery",
  ];

  const animateFrom = { opacity: 0, x: 40 };
  const animateTo = { opacity: 1, x: 0 };

  return (
    <nav className="navbar">
      <div className={`${props.hamClass}-dark`} onClick={props.closeMenu}></div>
      <ul className={`navMenu ${props.hamClass}`}>
        {navMenu.map((nav, key) => (
          <motion.li
            key={key}
            className={`menu ${props.hamClass}-li`}
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: `${nav.delay}` }}
            onClick={() => props.isMobile && props.closeMenu()}
          >
            <img
              src={nav.hamImg}
              alt=""
              className={`ham-img ${props.hamClass}-img`}
            />
            <Link to={`/${nav.menu}`}>{nav.menu}</Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
