import React, { Component } from 'react'
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
          <h3>
            Thanks for logging in!
          </h3>
          <br />
          <img className="image" src={puppies3} alt="Puppies at the park (3)" />
        </div>
      </div>
    )
  }
}

export default withAuth(Welcome);
