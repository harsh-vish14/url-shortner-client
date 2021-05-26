import React from "react";
import { FaLocationArrow } from "react-icons/all";
import classes from "./input.module.css";

function Input() {
  return (
    <div className={classes.input}>
      <input type="text" id="input" placeholder="Url" />
      <div>
        <FaLocationArrow />
      </div>
    </div>
  );
}

export default Input;
