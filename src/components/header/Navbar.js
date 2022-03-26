import React from "react";

export default function Navbar() {
  const navbar = [
    "Browse All",
    "NEW",
    "SALE",
    "OUTER",
    "TOPS",
    "BOTTOMS",
    "DRESSES",
    "MEN",
    "ACC",
    "SET",
    "PJs",
    "19.99",
    "Fast delivery",
    "CONTACT",
    "More",
  ];

  return (
    <nav className="navbar">
      <ul className="navMenu">
        {navbar.map((menu, id) => (
          <li className="menu" key={id}>
            <a href="/">{menu}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
