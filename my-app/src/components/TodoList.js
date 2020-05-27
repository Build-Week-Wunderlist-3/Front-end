import React, { useState, useEffect } from "react";
// import {axiosWithAuth} from "../utils/axiosWithAuth"
import { Link } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//components
import Todo from "./Todo";
import AddTodo from "../components/AddTodo";

const data = [
  {
    task: "Fold the laundry",
    id: 1,
    completed: false,
  },
  {
    task: "Walk the dogs",
    id: 2,
    completed: false,
  },
  {
    task: "Cook the dinner",
    id: 3,
    completed: false,
  },
];

export default function TodoList() {
  const [todoList, setTodoList] = useState(data);





  //get the data from the API

  useEffect(() => {
    axiosWithAuth()
      .get("/api/tasks")
      .then((res) => {
        console.log("TodoList -res.data:", res.data);
        // setTodoList(res.data);
      })
      .catch((err) => console.log("ERROR TodoList", err));
  }, []);

  //Toggle class name "completed" in the Todo
  const toggleItem = (id) => {
    const newTodo = todoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });

    setTodoList(newTodo);
  };

  //Delete the Todo
  // const deleteTodo = (id) => {
  //   axiosWithAuth()
  //     .delete(`/api/tasks/${id}`)
  //     .then((res) => {
  //       console.log("DELETE-RES:", res);
  //       setFriendList(res.data);
  //     })
  //     .catch((err) => console.log("ERROR- DELETE:", err));
  // };
  console.log(todoList);

  const clearCompleted = (e) => {
    e.preventDefault();
    const deleteAll = data.filter((item) => !item.completed);
    setTodoList(deleteAll);
    console.log("DELETE ALL", deleteAll);
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Log Out</Link>
        </li>
      </ul>
      <h2>Todo List</h2>
      <AddTodo />

      {/* {todoList.map(todo => (


        <button onClick={e => {
          e.stopPropagation();
          deleteTodo(todo)
        }
        } > Clear Completed </button>
      // ))} */}

      <button onClick={clearCompleted}>Clear Completed</button>

      {/* <AddFriend setTodoList={setTodoList} /> */}

      <div className="wrap-list">
        {todoList &&
          todoList.map((item) => (
            <Todo item={item} key={item.id} toggleItem={toggleItem} />
          ))}
      </div>
    </div>
  );
}
