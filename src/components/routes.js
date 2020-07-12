import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import  history   from '../helpers/history.js';
import Dashboard from './dashboard/dashboard';

const notFoundComponent = () => <h1 className="text-center">404</h1>;

class Routes extends React.Component {
    render() {
      return (
        <Router history={history}>
          <Switch>
            <Route path="/" component={Dashboard} /> 
            <Route component={notFoundComponent} />
          </Switch>
        </Router>
      )
    }
}

export default Routes;