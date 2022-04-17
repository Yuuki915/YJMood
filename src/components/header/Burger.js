// import { stack as Menu } from "react-burger-menu";

import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";

export default function Burger() {
  return (
    <div id="outer-container">
      {/* <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        right
        width={280}
        disableCloseOnEsc
      /> */}
      <CgMenuRightAlt
        className="hamburger"
        size="30px"
        color="#333"
        onClick={() => console.log("hi")}
      />
      <main id="page-wrap"></main>
    </div>
  );
}
