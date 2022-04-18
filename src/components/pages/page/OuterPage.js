import React from "react";
import PageBase from "../PageBase";

export default function OuterPage() {
  const outerPage = {
    h1: "New Arrivals",
  };

  return (
    <div>
      <PageBase h1={outerPage.h1} />
    </div>
  );
}
