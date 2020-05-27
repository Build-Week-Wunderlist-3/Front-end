import React, { useState, useEffect } from "react";
// import {axiosWithAuth} from "../utils/axiosWithAuth"
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//components
import Todo from "./Todo";
import AddTodo from "../components/AddTodo";

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);

  //get the data from the API
  useEffect(() => {
    axiosWithAuth()
      .get("/api/tasks")
      .then((res) => {
        console.log("TodoList -res.data:", res.data);
        setTodoList(res.data.task);
      })
      .catch((err) => console.log("ERROR TodoList", err));
  }, []);

  //Toggle class name "completed" in the Todo
  // const toggleItem = (id) => {
  //   const newTodo = todoList.map((item) => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         completed: !item.completed,
  //       };
  //     } else {
  //       return item;
  //     }
  //   });

  //   setTodoList(newTodo);
  // };

  console.log(todoList);

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Log Out</Link>
        </li>
      </ul>
      <h2>Todo List</h2>
      <AddTodo setTodoList={setTodoList} />

      <div className="wrap-list">
        {todoList.length > 0 &&
          todoList.map((item) => <Todo item={item} key={item.id} />)}
      </div>
    </div>
  );
}
