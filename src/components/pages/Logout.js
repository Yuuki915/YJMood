import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout, selectUser } from "../../redux/userSlice";

export default function Logout(props) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div>
      <h4>
        Hi, <span>{user.name}</span>
      </h4>
      <button onClick={(e) => handleLogout(e)}>Sign Out</button>
    </div>
  );
}
