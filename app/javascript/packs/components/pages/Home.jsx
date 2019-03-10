import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import AuthService from '../../services/AuthService'
import puppies1 from '../../assets/images/puppies-park-1.png'

const Auth = new AuthService()

class Home extends Component {
  render() {
    return (
      <div className="center">
        <h1>
          Home
        </h1>
        <br />
        <h3>
          Thanks for stopping by!
        </h3>
        {!Auth.loggedIn() &&
          <div className="text-muted">
            Don't have an account?&nbsp;
            <NavLink to="/signup">
              <a href="/signup">
                Sign up
              </a>
            </NavLink>
          </div>
        }
        {!Auth.loggedIn() &&
          <div className="text-muted">
            Already have an account?&nbsp;
            <NavLink to="/login">
              <a href="/login">
                Login
              </a>
            </NavLink>
          </div>
        }
        <br />
        <img className="image" src={puppies1} alt="Puppies at the park (1)"/>
      </div>
    )
  }
}

export default Home;
