import React, { useState, useEffect } from "react";
// import {axiosWithAuth} from "../utils/axiosWithAuth"

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
  const [todoList, setTodoList] = useState([]);

  return <div></div>;
}
