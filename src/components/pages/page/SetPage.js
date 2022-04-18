import React from "react";
import PageBase from "../PageBase";

export default function SetPage() {
  const setPage = {
    h1: "New Arrivals",
  };

  return (
    <div>
      <PageBase h1={setPage.h1} />
    </div>
  );
}
