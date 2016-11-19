require('styles/Login.scss');

import React from 'react';
import { hashHistory } from 'react-router';
import request from 'superagent';

class Login extends React.Component {
  constructor() {
    super();
    this.userInput = {};
    this.passwordInput = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div>
          <input type="text" ref={node => {
            this.userInput = node
          }} />
        </div>
        <div>
          <input type="password" ref={node => {
            this.passwordInput = node
          }} />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.userInput.value.trim();
    let password = this.passwordInput.value.trim();
    if (!user || !password) return;
    request.post('http://localhost:3000/v2/authentication/login')
    .send({ user: user, password: password })
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .end((err, res) => {
      if (!err) {
        window.sessionStorage.token = res.body.data.token;
        hashHistory.push('/');
      }
    })
  }

}

export default Login;
