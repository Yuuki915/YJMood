import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

export default function SnsIcons() {
  const snsHref = [
    "https://www.instagram.com/yjmood/",
    "https://www.facebook.com/yjmood",
    "https://www.pinterest.ca/Fashion_YJMood/_created/",
  ];
  return (
    <div className="sns-icons-container">
      <a href={snsHref[0]}>
        <FontAwesomeIcon className="sns-icon" icon={faInstagram} size="2x" />
      </a>

      <a href={snsHref[1]}>
        <FontAwesomeIcon className="sns-icon" icon={faFacebookF} size="2x" />
      </a>

      <a href={snsHref[2]}>
        <FontAwesomeIcon className="sns-icon" icon={faPinterestP} size="2x" />
      </a>
    </div>
  );
}
