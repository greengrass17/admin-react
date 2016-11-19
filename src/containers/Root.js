import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import Login from '../'
import { Router } from 'react-router'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route name="login" path="/" component={Login}></Route>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
