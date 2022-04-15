import React from "react";
import PageBase from "../PageBase";

export default function PajamasPage() {
  const pajamasPage = {
    h1: "New Arrivals",
  };

  return (
    <div>
      <PageBase h1={pajamasPage.h1} />
    </div>
  );
}
