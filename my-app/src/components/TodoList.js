import React, { useState, useEffect } from "react";
// import {axiosWithAuth} from "../utils/axiosWithAuth"
import { Link } from "react-router-dom";
import axios from 'axios'

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


=======
  useEffect(() => {
    axios
      .get("https://bw-wunderlist-3.herokuapp.com/api/tasks")
      .then((res) => {
        console.log("TodoList -res.data:", res.data);
        setTodoList(res.data);
      })
      .catch((err) => console.log("ERROR TodoList", err));
  }, []);


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


  const toggleItem = id => {

    const newTodo = todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }

    })

    setTodoList(newTodo)

  }

  const deleteTodo = todo => {
    // make a delete request to delete this color

    axios
      .delete(`https://bw-wunderlist-3.herokuapp.com/api/tasks/${todo.id}`)
      .then((res) => {
        console.log(res.data)

        axios
          .get(`https://bw-wunderlist-3.herokuapp.com/api/tasks/`)
          .then(res => {
            console.log(res.data)
            setTodoList(res.data)


          })


      })

  };


  console.log(todoList)


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
      ))} */}

      <button onClick={deleteTodo}>Clear Completed</button>


      {/* <AddFriend setTodoList={setTodoList} /> */}

      < div className="wrap-list" >
        {todoList && todoList.map((item) => (
          <Todo item={item} key={item.id} toggleItem={toggleItem} />

        ))}
      </div>
    </div >
  );
}
