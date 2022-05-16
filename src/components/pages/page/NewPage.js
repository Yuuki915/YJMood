import React from "react";
import PageBase from "../PageBase";
import pageData from "../../../data/new-data.json";

export default function NewPage() {
  const pageH2 = "New Arrivals";
  const link = "new";
  console.log(pageData.map((a) => a));

  return (
    <div className="new-page">
      {/* <PageBase h2={pageH2} newPage={newPage} link={link} /> */}
      <PageBase h2={pageH2} pageData={pageData} link={link} />

      {pageData.map((a) => a.category.length > 0) ? (
        <>
          {/* <Color
                colors={props.colors}
                handleSelectOption={handleSelectOption}
              /> */}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
