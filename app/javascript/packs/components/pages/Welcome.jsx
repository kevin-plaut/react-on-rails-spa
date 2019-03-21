import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

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
          <NavLink to="/newpost">
            <a href="/newpost">
              <Button variant="dark">
                CLICK HERE TO CREATE A POST
              </Button>
            </a>
          </NavLink>
          <br />
          <br />
          <img className="welcome-image" src={puppies3} alt="Puppies at the park (3)" />
        </div>
      </div>
    )
  }
}

export default withAuth(Welcome);
