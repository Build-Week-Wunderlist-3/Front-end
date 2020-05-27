import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/todolist">Todo List</Link>
        </li>
      </ul>
      <h3>Welcome to your Todo List!</h3>
    </div>
  );
}
