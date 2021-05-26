import React, { useState } from "react";
import classes from "./nevbar.module.css";

const Navbar = () => {
  const [toggle, setToggle] = useState("☀");
  var root = document.querySelector(":root");
  const changeTheme = () => {
    if (toggle == "☀") {
      root.style.setProperty("--background-color", "#333");
      root.style.setProperty("--font-color", "whitesmoke");
      root.style.setProperty("--nav-background-color", "#4f4f4f");
    } else {
      root.style.setProperty("--background-color", "#fff");
      root.style.setProperty("--font-color", "black");
      root.style.setProperty("--nav-background-color", "#ebebeb");
    }
    setToggle(toggle == "☀" ? "🌙" : "☀");
  };
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>Short-url</div>
      <div></div>
      <div className={classes.toggler} onClick={changeTheme}>
        {toggle}
      </div>
    </div>
  );
};

export default Navbar;
