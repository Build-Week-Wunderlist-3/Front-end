import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import "../App.css";

import { TodoContext } from '../contexts/TodoContext'

export default function Todo({ item }) {

  const { toggleItem, deleteItem } = useContext(TodoContext);

  const { push } = useHistory();
  return (
    <div className="todo-wrap">
      <div className={`item${item.completed ? " completed" : ""}`}>
        <h4 onClick={() => toggleItem(item.id)}>{item.task}</h4>
      </div>
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
  );
}
