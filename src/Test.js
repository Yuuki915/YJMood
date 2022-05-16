import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


// const Test = () => {
//   const [count, setCount] = useState(0);

//   // useEffect フック
//   useEffect(() => {
//     // document title を更新（ドキュメントのタイトルにメッセージをセット）
//     document.title = `${count} 回クリックしました。`;
//   });

//   return (
//     <div>
//       {console.log(count)}
//       <p>{count} 回クリックしました。</p>
//       <button onClick={() => setCount(count + 1)}>クリック</button>
//     </div>
//   );

const ToggleBtn = () => {
  const [checkedIn, setCheckedIn] = useState(false);
  const toggle = () => {
    setCheckedIn((prevState) => !prevState);
  };

  useEffect(() => {
    console.log("now state is", checkedIn);
    if (checkedIn) {
      console.log("Welcome!");
    }
    return () => {
      console.log("cleaning...");
    };
  });

  return <button onClick={toggle}>{checkedIn ? "In" : "Out"}</button>;
};

export default ToggleBtn;

// ReactDOM.render(<Test />, document.getElementById("root"));
