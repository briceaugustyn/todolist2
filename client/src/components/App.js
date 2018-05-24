// import logo from './logo.svg';
import './App.css';

import React,  {Component} from 'react';
// import ReactDOM from 'react-dom';
// import { Provider} from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import { Route, Link, Switch } from 'react-router-dom';
import Todolist from './Todolist2';
import Login from './login';
// const title = () => (
//   <div>
//     <p>Hello World Brice 2</p>
//   </div>
// );

class App extends Component {

  render() {
    return (
      <div className="Page">
        <h1> To Do List: Get Your Shit Done! </h1>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">Todo List</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </ul>
        </nav>

      <Switch>
      <Route exact path='/' component={index} />
      <Route path ="/list" component={Todolist} />
      <Route path ="/login" component={Login} />
      </Switch>
       </div>
    );
  }
}

export default App;
