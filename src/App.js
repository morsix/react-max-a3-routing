import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';

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
          <Switch>
            <Route path="/users" exact component={Users} ></Route>
            <Route path="/courses" component={Courses} ></Route>
            <Route path="/" exact component={Courses} ></Route>
            <Redirect from='/all-courses' to='/courses'></Redirect>
            <Route render={() => <h1>Not Found</h1>}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
