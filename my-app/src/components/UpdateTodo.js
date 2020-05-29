import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
const initialState = {
  //id: '',
  task: "",
  // description: "",
  // due_date: "",
  // completed: false,
  // user_id: ''
};
export default function UpdateTodo(props) {
  const { push } = useHistory();
  const { id } = useParams();
  //set State
  const [item, setItem] = useState(initialState);
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/task/${id}`)
      .then((res) => {
        console.log(res.data.task);
        setItem(res.data.task);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //make a PUT request to edit the item
    axiosWithAuth()
      .put(`/api/tasks/${id}`, item)
      .then((res) => {
        console.log("handleSubmit-RES:", res);
        setItem(initialState);
        push(`/todolist`);
      })
      .catch((err) => console.log("HandleSubmit error:", err));
  };
  return (
    <div>
      <ul>
        <li>
          <Link to="/todolist">Todo list</Link>
        </li>
        <li>
          <Link to="/">Log Out</Link>
        </li>
      </ul>
      <div className="update-page">
        <form className="updateForm" onSubmit={handleSubmit}>
          <h3>Update your Todo</h3>
          <label htmlFor="todo" className="label">
            Todo:
        </label>
          <input
            type="text"
            name="task"
            value={item.task}
            onChange={handleChange}
          />
          <button className="sbmt-btn" type="submit">
            Submit
        </button>
        </form>
      </div>
    </div>
  );
}
