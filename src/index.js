import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./Assets/Global.css";
import { Todo } from "./Todo";

// const token = localStorage.getItem("token_key");
// console.log(token);

// localStorage.removeItem("token_key");

// localStorage.clear();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <Todo />
  </Fragment>
);
