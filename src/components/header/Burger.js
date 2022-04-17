import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";

export default function Burger() {
  const [open, setOpen] = useState(false);
  const hamClass = "ham-class";

  const openHamIcon = (
    <CgMenuRightAlt
      className="hamburger"
      size="30px"
      color="#333"
      onClick={() => setOpen(!open)}
    />
  );
  const closeHamIcon = (
    <MdClose
      className="hamburger"
      size="30px"
      color="#333"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMenu = () => setOpen(false);

  return (
    <div id="outer-container">
      {open ? closeHamIcon : openHamIcon}
      {open && (
        <Navbar hamClass={hamClass} isMobile={true} closeMenu={closeMenu} />
      )}

      <main id="page-wrap"></main>
    </div>
  );
}
