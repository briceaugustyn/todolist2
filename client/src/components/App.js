// import logo from './logo.svg';
//import './App.css';
import {BrowserRouter} from "react-router-dom";
import React,  {Component} from 'react';
import Header from './Header.js';
import Home from './Homepage.js';
// import { createStore, applyMiddleware } from 'redux';
import { Route, Link, Switch } from 'react-router-dom';
import Landing from './Landing.js';
//import Login from './login';
// const title = () => (
//   <div>
//     <p>Hello World Brice 2</p>
//   </div>
// );

// const test = () => {
//   return <p>Test</p>
// }

class App extends Component {


  render() {
    return (
      <div>
        <div className = "container">
          <Header />
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Home} /> 
              <Route exact path="/dashboard" component={Landing} /> 
              {/* <Route exact path="/dashboard" component={test} />  */}
            </div>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default App;
