import React from "react";
import PageBase from "../PageBase";

export default function BottomsPage() {
  const bottomsPage = {
    h1: "New Arrivals",
  };

  return (
    <div>
      <PageBase h1={bottomsPage.h1} />
    </div>
  );
}
