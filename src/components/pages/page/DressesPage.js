import React from "react";
import PageBase from "../PageBase";

export default function DressesPage() {
  const dressesPage = {
    h1: "New Arrivals",
  };

  return (
    <div>
      <PageBase h1={dressesPage.h1} />
    </div>
  );
}
