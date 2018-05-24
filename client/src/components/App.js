import React,  {Component} from 'react';
import { Route } from 'react-router-dom';
import Header from './Header'
import {BrowserRouter} from "react-router-dom";
import Home from './Homepage';
import Landing from './Landing';
//import Footer from './Footer';

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
