import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import TodoList from "./components/TodoList";
import Home from "./components/Home";
import UpdateTodo from "./components/UpdateTodo";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute exact path="/todolist" component={TodoList} />
          <Route path="/updatetodo/:id" component={UpdateTodo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
