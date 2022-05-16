import React from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Home() {
  return (
    <div>
      <Login />
      <Register />

      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  );
}
