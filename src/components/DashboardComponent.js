'use strict';

import React from 'react';
import { connect } from 'react-redux';

import GroupList from './GroupListComponent';
import { fetchGroups } from '../actions'

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
    this.props.dispatch(fetchGroups(token));
  }
}

// Uncomment properties you need
// Dashboard.propTypes = {};
// Dashboard.defaultProps = {};

export default connect(
  state => ({ groups: state.groups })
)(Dashboard);
