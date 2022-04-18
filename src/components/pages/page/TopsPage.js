import React from "react";
import PageBase from "../PageBase";

export default function TopsPage() {
  const topsPage = {
    h1: "New Arrivals",
  };

  return (
    <div>
      <PageBase h1={topsPage.h1} />
    </div>
  );
}
