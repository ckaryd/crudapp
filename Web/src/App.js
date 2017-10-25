import React, { Component } from 'react';
import { Router, browserHistory, Route, IndexRoute, withRouter, IndexRedirect } from 'react-router';
import List from './containers/list';
import Create from './containers/create';
import Update from './containers/update';

import NotFoundPage from './components/NotFoundPage'

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={List} />
        <Route path="/create" component={withRouter(Create)}/>
        <Route path="/update/:employeeId" component={withRouter(Update)}/> 
        <Route path="*" component={NotFoundPage}/>
      </Router>
    );
  }
}