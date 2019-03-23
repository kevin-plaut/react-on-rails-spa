import React, { Component } from 'react'
import puppies2 from '../../assets/images/puppies-park-2.png'

class About extends Component {
  render() {
    return (
      <div className="center">
        <h2>
          About
        </h2>
        <h4>
          Fancy meeting you here!
        </h4>
        <br />
        <img
          className="about-image"
          src={puppies2}
          alt="Puppies at the park (2)"
        />
      </div>
    )
  }
}

export default About
