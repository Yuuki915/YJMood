import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confPwd, setConfPwd] = useState("");
  if (pwd !== confPwd) {
    console.log("Should be same!");
  }
  const [err, setErr] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        pwd: pwd,
        confPwd: confPwd,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="login-container">
      <div>Sign In</div>
      <form className="input-form" onChange={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder=" name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder=" email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder=" password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <input
          type="password"
          placeholder=" confirm password"
          value={confPwd}
          onChange={(e) => setConfPwd(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
