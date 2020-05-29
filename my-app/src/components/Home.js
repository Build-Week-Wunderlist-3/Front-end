import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <ul>
        <li>
          <a
            target="blank"
            href="https://wunderlist3-ui.netlify.app/index.html"
          >
            Learn More
          </a>
        </li>
        <li>
          <a
            target="blank"
            href="https://wunderlist3-ui.netlify.app/about.html"
          >
            Our Team
          </a>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/todolist">Todo List</Link>
        </li>
      </ul>
      <div className="home-wrap">
        <div className="home-container">
          <h2>Welcome to your Todo List!</h2>
        </div>
      </div>
    </div>
  );
}
