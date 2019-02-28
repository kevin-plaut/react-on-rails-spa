import React, { Component } from 'react'
import puppies2 from '../../assets/images/puppies-park-2.png'

class About extends Component {
  render() {
    return (
      <div className="center">
        <h1>
          About
        </h1>
        <br />
        <h3>
          Fancy meeting you here!
        </h3>
        <br />
        <img className="image" src={puppies2} alt="Puppies at the park (2)" />
      </div>
    )
  }
}

export default About;
