import React, { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");

  const loginHandler = (e) => {
    console.log("hi");
  };
  const changeHandler = () => {
    setName(name);
    setEmail(email);
    setPwd(pwd);
  };

  return (
    <div className="login-container">
      <div>Sign In</div>
      <form className="input-form">
        <input
          type="text"
          placeholder=" name"
          value={name}
          onChange={changeHandler}
        />
        <input
          type="email"
          placeholder=" email"
          value={email}
          onChange={changeHandler}
        />
        <input
          type="password"
          placeholder=" password"
          value={pwd}
          onChange={changeHandler}
        />
        <input
          type="password"
          placeholder=" confirm password"
          value={pwd}
          onChange={changeHandler}
        />
        <button type="submit" onClick={loginHandler}>
          Sign In
        </button>
      </form>
    </div>
  );
}
