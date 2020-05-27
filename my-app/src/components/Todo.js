import React from "react";
import { useHistory } from "react-router-dom";

export default function Todo(props) {
  const { push } = useHistory();
  return (
    <div
      className={`item${props.item.completed ? " completed" : ""}`}
      onClick={() => props.toggleTodo(props.item.id)}
      style={props.item.completed ? { textDecoration: "line-through" } : null}
    >
      <h4>{props.item.task}</h4>
      <button
        className="edit-btn"
        onClick={() => push(`/updatetodo/${props.item.id}`)}
      >
        Edit
      </button>

      {/* 
        <button
          className="delete-btn"
          onClick={() => props.deleteFriend(props.item.id)}
        >
          Delete
        </button> */}
    </div>
  );
}
