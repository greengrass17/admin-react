require('styles/Login.scss');

import React from 'react';
import { hashHistory } from 'react-router';
import request from 'superagent';

const Login = ({dispatch}) => {
  let userInput, passwordInput

  let handleSubmit = e => {
    e.preventDefault();
    let user = userInput.value.trim();
    let password = passwordInput.value.trim();
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

  return (
    <form className="login-form" onSubmit={handleSubmit}>
    <div>
      <input type="text" ref={node => {
        userInput = node
      }} />
    </div>
    <div>
      <input type="password" ref={node => {
        passwordInput = node
      }} />
    </div>
    <div>
      <input type="submit" value="Login" />
    </div>
    </form>
  )
}

export default Login;
