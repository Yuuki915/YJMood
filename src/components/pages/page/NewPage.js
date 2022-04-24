import React from "react";
import PageBase from "../PageBase";
import pageData from "../../page-data.json";

import newItemImg from "../../../images/newItems.webp";
import pickupImg from "../../../images/pickup1.jpg";

export default function NewPage() {
  const pageH2 = "New Arrivals";
  const newPage = [
    { id: 1, img: newItemImg, item: "New Item", price: 23.12 },
    { id: 2, img: pickupImg, item: "Pick Up", price: 23.12 },
    { id: 3, img: newItemImg, item: "abcde", price: 23.12 },
    { id: 4, img: newItemImg, item: "abcde", price: 23.12 },
    { id: 5, img: newItemImg, item: "abcde", price: 23.12 },
  ];
  const link = "new";

  return (
    <div className="new-page">
      <PageBase h2={pageH2} newPage={newPage} link={link} />
      {/* <PageBase h2={pageH2} pageData={pageData[0]} link={link} /> */}
      {/* {console.log(pageData[0])} */}
    </div>
  );
}
