// import logo from './logo.svg';
//import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import React,  {Component} from 'react';
// import { createStore, applyMiddleware } from 'redux';/
// import { Route, Link, Switch } from 'react-router-dom';
//import Landing from './Landing.js';
import TodoList from './Todolist2';
import Calendar from './Calendar';
import Home from './Homepage.js'
import Landing from './Landing.js';
import Navbar from './Navbar';
import About from './About';
import Fab from './Fab';
//import Login from './login';
// const title = () => (
//   <div>
//     <p>Hello World Brice 2</p>
//   </div>
// );

import Complete from './CompleteTasks.js';
// import { createStore, applyMiddleware } from 'redux';
import { Route, Link, Switch } from 'react-router-dom';
import Landing from './Landing.js';




class App extends Component {


  render() {
    return (
      <div>
        <div className = "container">
        <Navbar />
          <BrowserRouter>
            <div>
            <Route exact path="/" component={Home} /> 
              <Route exact path="/dashboard" component={Landing} />
              <Route path="/lists" component={TodoList} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/about" component={About} />
              <Route exact path="/complete" component={Complete} /> 
              {/* <Route exact path="/dashboard" component={test} />  */}
            </div>
          </BrowserRouter>
        </div>
        <Fab align="right"/>
      </div>
    )
  }
}

export default App;
