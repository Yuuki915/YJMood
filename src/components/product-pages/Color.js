import React from "react";
import "./Product.css";

function Color(props) {
  // const handleColorOption = (id) => {
  //   console.log(id);
  // };

  return (
    <div className="colors-in-product">
      <h6 className="h6">Color</h6>
      <div className="color-options">
        <div className="color-box">
          {props.colors.map((color) => (
            <div key={color.colorId}>
              <div
                key={color.colorName}
                onClick={() => props.handleSelectOption(color.colorId)}
                // onClick={() => props.handleSelectOption(color.colorId)}
                className="color-circle"
                style={{
                  backgroundColor: color.colorName,
                }}
              ></div>
            </div>
          ))}
        </div>
        {/* <Quantity colors={props.colors} /> */}
        {/* <p>白</p>
        <p>黒</p> */}
      </div>
    </div>
  );
}

export default Color;
