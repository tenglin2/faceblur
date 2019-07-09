import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/faceblur">Faceblur</Link>
      </div>
    );
  }
}

export default Navbar;