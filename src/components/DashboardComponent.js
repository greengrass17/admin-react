'use strict';

import React from 'react';
import request from 'superagent';
import { connect } from 'react-redux';

import GroupList from './GroupListComponent';
import { receiveGroups } from '../actions'

require('styles/Dashboard.scss');

class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard-component">
        <h1>Dashboard</h1>
        <GroupList groups={this.props.groups} />
      </div>
    );
  }

  componentDidMount() {
    this.getGroups();
  }

  getGroups() {
    const token = window.sessionStorage.token;
    request.get('http://localhost:3000/v2/dashboard/get_groups')
    .set('auth-token', token)
    .end((err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      this.props.dispatch(receiveGroups(res));
    })
  }
}

// Uncomment properties you need
// Dashboard.propTypes = {};
// Dashboard.defaultProps = {};

export default connect(
  state => ({ groups: state.groups })
)(Dashboard);
