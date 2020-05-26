import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";




const initialState = {
  name: "",
};

export default function UpdateTodo() {
  const { push } = useHistory();
  const { id } = useParams();

  //set State
  const [item, setItem] = useState(initialState);

  const handleChange = (ev) => {
    ev.persist();
    setItem({
      ...item,
      [ev.target.name]: ev.target.value,
    });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     //make a PUT request to edit the item
  //     axiosWithAuth()
  //       .put(`API`, item)
  //       .then((res) => {
  //         // console.log("handleSubmit-RES:", res);
  //         setItem(res.data);
  //         push(`/todolist`);
  //       })
  //       .catch((err) => console.log("HandleSubmit error:", err));
  //   };

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Log Out</Link>
        </li>
      </ul>
      <form className="updateForm">
        <h3>Update your Todo</h3>
        <label htmlFor="todo" className="label">
          Todo:
        </label>
        <input
          type="text"
          name="todo"
          value={item.name}
          onChange={handleChange}
        />
        <button className="sbmt-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
