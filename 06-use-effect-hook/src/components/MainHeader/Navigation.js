import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      {props.isLoggedIn && (
        <ul>
          <li>
            <a href="/user">Users</a>
          </li>
          <li>
            <a href="/admin">Admin</a>
          </li>
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
