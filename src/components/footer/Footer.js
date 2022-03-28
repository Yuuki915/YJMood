import React from "react";

import SnsIcons from "../main/SnsIcons";

export default function Footer(props) {
  const footers = [
    {
      h3: "YJMOOD",
      atag: [
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
      ],
    },
    {
      h3: "HELP",
      atag: ["SHIPPING & RETURNS", "STORE POLICY", "PAYMENT METHODS"],
    },
    {
      h3: "CONTACT",
      atag: "INFO@YJMOOD.COM",
    },
    {
      h3: "NEWSLETTER",
      atag: "INFO@YJMOOD.COM",
    },
  ];

  const footerIconClass = ["footer-sns-icon", "footer-sns-icon"];

  return (
    <div className="footer">
      <div className="f-menu-container">
        <h3>{footers[0].h3}</h3>
        <ul>
          {footers[0].atag.map((a, key) => (
            <li key={key}>
              <a href="/">{a}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="f-menu-container">
        <h3>{footers[1].h3}</h3>
        <ul>
          {footers[1].atag.map((a, key) => (
            <li key={key}>
              <a href="/">{a}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="f-menu-container">
        <h3>{footers[2].h3}</h3>
        <ul>
          <li>
            <a href="/">{footers[2].atag}</a>
          </li>
        </ul>
      </div>

      <div className="f-menu-container">
        <h3>{footers[3].h3}</h3>
        <ul>
          <li>
            <a href="/">{footers[3].atag}</a>
          </li>
        </ul>
      </div>

      <SnsIcons class={footerIconClass[0]} class2={footerIconClass[1]} />
      <p className="copyright">&copy; 2022 by YJMood</p>
    </div>
  );
}
