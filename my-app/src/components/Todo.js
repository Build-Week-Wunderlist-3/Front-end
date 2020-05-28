import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

export default function Todo({ item, toggleItem, deleteItem }) {
  const { push } = useHistory();
  return (
    <div>
      <div className='todoRow'>
        <div className={`item${item.completed ? " completed" : ""}`}>

          <h4 onClick={() => toggleItem(item.id)}>{item.task}</h4>
        </div>


        <div className='buttons'>
          <button
            className="edit-btn"
            onClick={() => push(`/updatetodo/${item.id}`)}
          >
            Edit
        </button>

          <button
            className="delete-btn"
            onClick={deleteItem}

          >
            Clear
        </button>
        </div>
      </div>
    </div>
  );
}
