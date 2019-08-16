import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/users" component={Users} ></Route>
          <Route path="/courses" component={Courses} ></Route>
          {/* <Route render={ () => <h1>Not Found</h1>}></Route> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
