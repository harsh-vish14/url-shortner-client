import React, { useState } from "react";
import Message from "../message/Message";
import classes from "./header.module.css";
import Input from "./input";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.titles}>
        <h1>
          Reduce the size of URL <span>Free</span>
        </h1>
        <h3>Just add your url in below and get new compressed URL</h3>
      </div>
      <Input />
    </div>
  );
};

export default Header;
