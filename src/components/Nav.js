import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    let username = `${this.props.user.Fname} ${this.props.user.Lname}`;
    this.state = {
      username: username
    };
  }

  render() {
    return (
      <div className="main row">
        <div>
          <h2>{this.state.username}</h2>

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
};


export default Nav;
