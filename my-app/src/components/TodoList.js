import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";


//components
import Todo from "./Todo";
import AddTodo from "../components/AddTodo";


//Context API
import { TodoContext } from '../contexts/TodoContext'

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);


  //get the data from the API
  useEffect(() => {
    axiosWithAuth()
      .get("/api/tasks")
      .then((res) => {
        // console.log("GET REQUEST", res.data.task);

        setTodoList(res.data.task);
      })
      .catch((err) => console.log("ERROR TodoList", err));
  }, []);

  // Toggle class name "completed" in the Todo
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

  // DELETE ITEM---------------------------------
  const deleteItem = (id) => {
    axiosWithAuth()
      .delete(`/api/task/${id}`)
      .then((res) => {
        console.log("DELETE - RES.DATA:", res.data);
        setTodoList(todoList.filter((todo) => todo.id !== id));
      })

      .catch((err) => {
        console.log("DELETE ERROR:", { err });
        console.log("todoList after DELETE:", todoList);
      });
  };


  return (

    <div>
      <TodoContext.Provider value={{ setTodoList, deleteItem, todoList, toggleItem }}>
        <ul>
          <li>
            <Link to="/">Log Out</Link>
          </li>
        </ul>
        <div className="todolist-wrap">
          <h1>My To-do List</h1>
          <AddTodo />

          <div className="wrap-list">
            {todoList.length > 0 &&
              todoList.map((item) => (
                <Todo
                  item={item}
                  key={item.id}

                />
              ))}
          </div>
        </div>
      </TodoContext.Provider>
    </div>

  );
}
