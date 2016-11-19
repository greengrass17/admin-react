require('normalize.css/normalize.css');
require('styles/App.scss');

import React, { PropTypes } from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import request from 'superagent';

import Nav from './Nav';
import Dashboard from './DashboardComponent';
import Login from './LoginComponent';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route name="login" path="/login" component={Login} onEnter={this.logout}></Route>
        {/* hot fix for hook.length == 0 */}
        <Route name="app" path="/" component={(props) => (<Nav {...props} user={this.props.user} />)} onEnter={(nextState, replace, cb) => this.requireAuth(nextState, replace, cb)}>
          {/* add the routes here */}
          <IndexRoute component={(props) => (<Dashboard {...props} user={this.props.user} />)}></IndexRoute>
        </Route>
      </Router>
    );
  }

  logout(nextState) {
    delete window.sessionStorage.token;
  }

  requireAuth(nextState, replace, cb) {
    let token = window.sessionStorage.token;
    if (!token) {
      replace('/login');
      cb();
      return;
    }
    request.get('http://localhost:3000/v2/users')
    .set('auth-token', token)
    .end((err, res) => {
      if (err) {
        console.log(err);
        replace('/login');
        cb();
      } else {
        this.props.setUser(res.body.data[0]);
        cb();
      }
    })
  }
}

AppComponent.defaultProps = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired
};

export default AppComponent;
