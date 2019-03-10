import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import withAuth from '../../services/withAuth'
import puppies3 from '../../assets/images/puppies-park-3.png'

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="center">
          <h1>
            Welcome
          </h1>
          <br />
          <h4>
            Thanks for logging in!
          </h4>
          <div className="text-muted">
            click&nbsp;
            <NavLink to="/newpost">
              <a href="/newpost">
                HERE
              </a>
            </NavLink>
            &nbsp;to create a Post
          </div>
          <br />
          <img className="image" src={puppies3} alt="Puppies at the park (3)" />
        </div>
      </div>
    )
  }
}

export default withAuth(Welcome);
