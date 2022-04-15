import React from "react";
import PageBase from "../PageBase";

export default function SalePage() {
  const salePage = {
    h1: "New Arrivals",
  };

  return (
    <div>
      <PageBase h1={salePage.h1} />
    </div>
  );
}
