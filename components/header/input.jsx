import React, { Fragment, useState, useRef } from "react";
import { FaLocationArrow } from "react-icons/all";
import Message from "../message/Message";
import classes from "./input.module.css";

function Input() {
  const [showPop, setShowPop] = useState(false);
  const [message, setMessage] = useState({
    message: "....loading....",
    status: "success",
  });
  const url = useRef();
  const handelClicked = () => {
    setShowPop(true);
    setMessage({
      message: "....loading....",
      status: "success",
    });
    fetch("https://shortsurl.herokuapp.com/register-url", {
      method: "POST",
      body: JSON.stringify({ url: url.current.value }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((data) => {
          throw new Error(data.err);
        });
      })
      .then((data) => {
        setMessage({
          message: data.url,
          status: "success",
        });
      })
      .catch((err) => {
        setMessage({
          message: err.message,
          status: "error",
        });
      });
  };
  return (
    <Fragment>
      <div className={classes.input}>
        <input type="text" id="input" placeholder="Url" ref={url} />
        <div onClick={handelClicked}>
          <FaLocationArrow />
        </div>
      </div>
      {showPop && <Message message={message.message} status={message.status} />}
    </Fragment>
  );
}

export default Input;
