import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
  }

  render() {
    return (
      <div className="main row">
        <div>
          <h2>{this.state.username}</h2>

          <ul className="col-md-2">
            <li><Link to="/">Comment Box</Link></li>
            <li><Link to="/login">Logout</Link></li>
          </ul>
        </div>

        <div className="col-md-10">
          {this.props.children}
        </div>
      </div>
    )
  }

  componentDidMount() {
    let username = `${this.props.user.Fname} ${this.props.user.Lname}`;
    this.setState({username});
  }
}

Nav.defaultProps = {
};


export default Nav;
