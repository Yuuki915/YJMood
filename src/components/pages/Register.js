import React from "react";

export default function Register() {
  return (
    <div>
      <div>Sign Up</div>
      <form className="input-form">
        <input type="text" placeholder=" name" />
        <input type="email" placeholder=" email" />
        <input type="password" placeholder=" password" />
        <input type="password" placeholder=" confirm password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
