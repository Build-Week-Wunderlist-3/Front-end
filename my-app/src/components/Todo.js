import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

export default function Todo({ item, toggleItem }) {
  const { push } = useHistory();
  return (
    <div>
      <div className={`item${item.completed ? " completed" : ""}`}>
        <h4 onClick={() => toggleItem(item.id)}>{item.task}</h4>

        <button
          className="edit-btn"
          onClick={() => push(`/updatetodo/${item.id}`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
