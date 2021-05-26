import React from "react";
import { HiClipboardCopy } from "react-icons/all";
import classes from "./message.module.css";

function Message({ message, status }) {
  return (
    <div
      className={
        status === "success"
          ? `${classes.success} ${classes.message}`
          : `${classes.error} ${classes.message}`
      }
    >
      <div>{message}</div>
      <div
        style={{ display: status === "success" ? "" : "none" }}
        className={classes.copy}
        title="copy"
        onClick={() => {
          navigator.clipboard.writeText(message);
        }}
      >
        <HiClipboardCopy />
      </div>
    </div>
  );
}

export default Message;
