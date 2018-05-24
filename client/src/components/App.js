<<<<<<< HEAD
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
=======
import React,  {Component} from 'react';
import { Route } from 'react-router-dom';
import Header from './Header'
import {BrowserRouter} from "react-router-dom";
import Home from './Homepage';
import Landing from './Landing';
//import Footer from './Footer';
>>>>>>> 5cac10e543fdeaf9c0e0cde7f62133c821c35615

class App extends Component {

  render() {
    return (
<<<<<<< HEAD
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
=======
      <div>
        <div className = "container">
          <Header />
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Home} /> 
              <Route exact path="/dashboard" component={Landing} /> 
            </div>
          </BrowserRouter>
        </div>
      </div>
    )
>>>>>>> 5cac10e543fdeaf9c0e0cde7f62133c821c35615
  }
}

export default App;
