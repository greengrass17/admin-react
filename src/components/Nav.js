import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {

  render() {
    let username = `${this.props.user.Fname} ${this.props.user.Lname}`;

    return (
      <div className="main row">
        <div>
          <h2>{username}</h2>

          <ul className="col-md-2">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/login">Logout</Link></li>
          </ul>
        </div>

        <div className="col-md-10">
          {this.props.children}
        </div>
      </div>
    )
  }

}

Nav.defaultProps = {
  user: PropTypes.object.isRequired
};


export default Nav;
