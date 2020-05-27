import React from 'react';
import Login from './components/Login'
import SignUp from './components/SignUp'
import './App.css';

function App() {
  return (
    <div className="App">
      <header><h1>Wunderlist App</h1></header>
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
