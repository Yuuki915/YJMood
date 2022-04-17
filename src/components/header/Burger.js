// import { stack as Menu } from "react-burger-menu";

import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Burger() {
  const [open, setOpen] = useState(false);

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

  return (
    <div id="outer-container">
      {/* <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        right
        width={280}
        disableCloseOnEsc
      /> */}

      {open ? closeHamIcon : openHamIcon}
      {open && <Navbar />}

      <main id="page-wrap"></main>
    </div>
  );
}
