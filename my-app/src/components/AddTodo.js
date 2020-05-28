// dependency imports
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";


import { TodoContext } from '../contexts/TodoContext'

const initialTask = {
  task: "",
  description: "",
  due_date: "06/01/2020",
  completed: false,
  user_id: "",
};
export default function AddTodo() {

  const { setTodoList, todoList } = useContext(TodoContext);

  const { push } = useHistory();
  const [task, setTask] = useState(initialTask);
  const [item, setItem] = useState(initialTask);
  //const [formDisabled, setFormDisabled] = useState(true)
  const handleChanges = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setTask({
      ...task,
      [e.target.name]: value,
    });
  };
  const newTodo = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/tasks", task)
      .then((res) => {
        console.log(res.data);
        setTask({ ...todoList, initialTask });
        axiosWithAuth()
          .get(`api/tasks`)
          .then((res) => {
            console.log("add", res);
            setTodoList(res.data.task);
          })
          .catch((err) => {
            console.log("ERROR ADDTODO:", err);
          });
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>Add New To-do</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="task"
            placeholder="Enter a To-Do..."
            onChange={handleChanges}
            value={task.task}
          />
        </label>
        <button onClick={newTodo}>+ Add</button>
      </form>
    </div>
  );
}
