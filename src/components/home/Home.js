import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Home() {
  const user = useSelector(selectUser);

  return (
    <div>
      {/* {user ? (
        <> */}
      <Header />
      <Main />
      <Footer />
      {/* </>
      ) : (
        <Login />
      )} */}
    </div>
  );
}
