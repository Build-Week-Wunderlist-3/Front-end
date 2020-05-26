import React from "react";
import { useHistory } from "react-router-dom";

export default function Todo(props) {
  const { push } = useHistory();
  return (
    <div>
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
