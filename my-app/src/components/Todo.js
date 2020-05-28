import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

export default function Todo({ item, toggleItem, deleteItem }) {
  const { push } = useHistory();
  return (
    <div className="todo-wrap">
      <div className={`item${item.completed ? " completed" : ""}`}>
        <h5 onClick={() => toggleItem(item.id)}>{item.task}</h5>
        <button
          className="edit-btn"
          onClick={() => push(`/updatetodo/${item.id}`)}
        >
          Edit
        </button>
        <button className="delete-btn" onClick={() => deleteItem(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
