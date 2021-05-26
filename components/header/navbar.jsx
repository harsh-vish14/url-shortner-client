import React, { useState } from "react";
import classes from "./nevbar.module.css";
const Navbar = () => {
  const [toggle, setToggle] = useState("☀");
  const changeTheme = () => {
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
