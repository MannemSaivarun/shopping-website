import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class LandingPage extends Component {
  render() {
    return (
        <div>
            <Link to="/login">
            <button>Login</button>
            </Link>

            <Link to="/signup">
            <button>Signup</button>
            </Link>
        </div>
    )
  }
}

export default LandingPage
