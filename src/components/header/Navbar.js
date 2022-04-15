import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navbar = [
    "New",
    "Sale",
    "Tops",
    "Bottoms",
    "Dresses",
    "Outer",
    "Accessories",
    "Set",
    "Pajamas",
    "Men",

    // "19.99",
    // "Fast delivery",
  ];

  return (
    <nav className="navbar">
      <ul className="navMenu">
        {navbar.map((menu, id) => (
          <li className="menu" key={id}>
            <Link to={`/${menu}`}>{menu}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
