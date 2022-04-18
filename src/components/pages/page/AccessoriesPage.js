import React from "react";
import PageBase from "../PageBase";

export default function AccessoriesPage() {
  const accessoriesPage = {
    h1: "New Arrivals",
  };

  return (
    <div>
      <PageBase h1={accessoriesPage.h1} />
    </div>
  );
}
