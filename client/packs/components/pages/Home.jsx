import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import AuthService from '../../services/AuthService'
import puppies1 from '../../assets/images/puppies-park-1.png'

const Auth = new AuthService()

class Home extends Component {
  render() {
    return (
      <div className="center">
        <h2>
          Home
        </h2>
        <h4>
          Thanks for stopping by!
        </h4>
        {!Auth.loggedIn() &&
          <small className="text-muted">
            Don't have an account?&nbsp;
            <NavLink to="/signup" as="span">
              Sign up
            </NavLink>
            <br />
          </small>
        }
        {!Auth.loggedIn() &&
          <small className="text-muted">
            Already have an account?&nbsp;
            <NavLink to="/login" as="span">
              Login
            </NavLink>
            <br />
          </small>
        }
        <img
          className="home-image"
          src={puppies1}
          alt="Puppies at the park (1)"
        />
      </div>
    )
  }
}

export default Home
