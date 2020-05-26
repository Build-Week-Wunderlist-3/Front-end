import React, { useState, useEffect } from "react";
// import {axiosWithAuth} from "../utils/axiosWithAuth"
import { Link } from "react-router-dom";

//components
import Todo from "./Todo";
import AddTodo from '../components/AddTodo'

const data = [
  {
    task: "Fold the laundry",
    id: 123,
    completed: false,
  },
  {
    task: "Walk the dogs",
    id: 1234,
    completed: false,
  },
  {
    task: "Cook the dinner",
    id: 12345,
    completed: false,
  },
];

export default function TodoList() {
  const [todoList, setTodoList] = useState(data);

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("API GOES HERE")
  //     .then((res) => {
  //       console.log("TodoList -res.data:", res.data);
  //       setTodoList(res.data);
  //     })
  //     .catch((err) => console.log("ERROR TodoList", err));
  // }, []);

  //   const toggleTodo = (id) => {
  //     setTodoList(
  //       data.map((item) => {
  //         if (item.id === id) {
  //           return {
  //             ...item,
  //             completed: !item.completed,
  //           };
  //         }
  //         return item;
  //       })
  //     );
  //   };

  //   const deleteTodo= (id) => {
  //     axiosWithAuth()
  //       .delete(`API-DELETE`)
  //       .then((res) => {
  //         console.log("DELETE-RES:", res);
  //         setFriendList(res.data);
  //         //  props.history.push("/protected")
  //       })
  //       .catch((err) => console.log("ERROR- DELETE:", err));
  //   };

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Log Out</Link>
        </li>
      </ul>
      <h2>Todo List</h2>
      <AddTodo />

      {/* <AddFriend setTodoList={setTodoList} /> */}
      <div className="wrap-list">
        {todoList.map((item) => (
          <Todo item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
