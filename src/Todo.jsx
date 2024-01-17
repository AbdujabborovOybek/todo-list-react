import React, { useState } from "react";
import "./Todo.css";

// const token = "ewcwe-we232-wdf23dc-wevwe-qd34-ec-f23-v-sdfvad";
// localStorage.setItem("token_key", token);
export const Todo = () => {
  const fruit = JSON.parse(sessionStorage.getItem("fruit")) || [];
  const [data, setData] = useState(fruit);
  const [update, setUpdate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = Object.fromEntries(new FormData(e.target));
    value.id = Math.floor(Math.random() * 10000);

    if (!update) {
      setData([...data, value]);
      sessionStorage.setItem("fruit", JSON.stringify([...data, value]));
      return e.target.reset();
    }

    const newData = [...data];
    const index = newData.findIndex((item) => item.id === update.id);
    newData.splice(index, 1, value);
    setData(newData);
    sessionStorage.setItem("fruit", JSON.stringify(newData));
    setUpdate(null);
    e.target.reset();
  };

  const handleDelete = (id) => {
    const newData = [...data];
    const filter = newData.filter((item) => item.id !== id);
    setData(filter);
    sessionStorage.setItem("fruit", JSON.stringify(filter));
  };

  return (
    <div className="container">
      <div className="todo">
        <form className="todo__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fruit"
            required
            defaultValue={update?.fruit || ""}
            placeholder="Apple, Mongo"
            autoComplete="off"
          />
          <button> {update ? "Update" : "Add"}</button>
        </form>

        <ol className="todo__list">
          {data.map((item) => {
            return (
              <li key={item?.id}>
                <span>{item?.fruit}</span>
                <button onClick={() => setUpdate(item)}>edit</button>
                <button onClick={() => handleDelete(item?.id)}>delete</button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
