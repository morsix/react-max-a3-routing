import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li><NavLink
                  to="/users/"
                  exact
                >Users</NavLink></li>
                <li><NavLink to={{
                  pathname: '/courses',
                }}>Courses</NavLink></li>
              </ul>
            </nav>
          </header>
          <Route path="/users" component={Users} ></Route>
          <Route path="/courses" component={Courses} ></Route>
          <Route path="/" exact component={Users} ></Route>
          {/* <Route render={ () => <h1>Not Found</h1>}></Route> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
