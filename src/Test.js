import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Test = () => {
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

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} 回クリックしました。`;
    //副作用関数が実行された際にコンソールに出力
    console.log("タイトル更新", count);
  });

  //レンダリング（再レンダー）を発生させるための乱数
  const [random, setRandom] = useState(Math.random());

  // レンダリングボタンをクリックすると random を更新（レンダーされる）
  const reRender = () => {
    setRandom(Math.random());
    console.log("再レンダー", random);
  };

  return (
    <div>
      <p>{count} 回クリックしました。</p>
      <button onClick={() => setCount(count + 1)}>クリック</button>
      <button onClick={reRender}>レンダリング</button>
    </div>
  );
};

export default Test;
// ReactDOM.render(<Test />, document.getElementById("root"));
