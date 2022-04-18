import React from "react";
import PageBase from "../PageBase";

import pic from "../../../images/newItems.webp";

export default function NewPage() {
  const pageH2 = "New Arrivals";
  const newPage = [
    { id: 1, img: pic, item: "abcde", price: 23.12 },
    { id: 2, img: pic, item: "abcde", price: 23.12 },
    { id: 3, img: pic, item: "abcde", price: 23.12 },
    { id: 4, img: pic, item: "abcde", price: 23.12 },
    { id: 5, img: pic, item: "abcde", price: 23.12 },
  ];

  return (
    <div className="new-page">
      <PageBase h2={pageH2} newPage={newPage} />
    </div>
  );
}
