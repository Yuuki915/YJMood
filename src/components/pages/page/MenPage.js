import React from "react";
import PageBase from "../PageBase";

export default function MenPage() {
  const menPage = {
    h1: "New Arrivals",
  };
  return (
    <div>
      <PageBase h1={menPage.h1} />
    </div>
  );
}
