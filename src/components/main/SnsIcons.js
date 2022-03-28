import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

import {} from "@fortawesome/free-solid-svg-icons";

export default function SnsIcons(props) {
  const snsHref = [
    "https://www.instagram.com/yjmood/",
    "https://www.facebook.com/yjmood",
    "https://www.pinterest.ca/Fashion_YJMood/_created/",
  ];

  return (
    <div className={`${props.class}`}>
      <a href={snsHref[0]}>
        <FontAwesomeIcon
          className={`${props.class2}`}
          icon={faInstagram}
          size="2x"
        />
      </a>

      <a href={snsHref[1]}>
        <FontAwesomeIcon
          className={`${props.class2}`}
          icon={faFacebookF}
          size="2x"
        />
      </a>

      <a href={snsHref[2]}>
        <FontAwesomeIcon
          className={`${props.class2}`}
          icon={faPinterestP}
          size="2x"
        />
      </a>

      <FontAwesomeIcon icon="fa-solid fa-circle-user" />
    </div>
  );
}
