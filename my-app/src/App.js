
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import TodoList from "./components/TodoList";
import Home from "./components/Home";
import UpdateTodo from "./components/UpdateTodo";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Switch> */}
        <Route exact path="/" component={Home} />
        {/* <Route path="/login" compoennt={Login} />
          <Route path="/signup" component={SignUp} />*/}
        <Route path="/updatetodo" component={UpdateTodo} />
        <Route path="/todolist" component={TodoList} />
        {/* </Switch> */}
      </div>
    </Router>

  );
}

export default App;
