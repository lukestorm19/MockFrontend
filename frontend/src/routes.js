
import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Overview/Dashboard'
import FilterReport from './Components/Report/FilterReport';
import ExceptionReport from './Components/Report/ExceptionReport';

function Routes() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/filterReport' component={FilterReport} />
          <Route path='/exceptionReport' component={ExceptionReport} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;