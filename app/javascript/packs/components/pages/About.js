import React, { Component } from 'react'
import AuthService from '../../services/AuthService'
import puppies2 from '../../assets/images/puppies-park-2.png'

const Auth = new AuthService()

class About extends Component {
	render () {
		return (
      <div className="center">
        <h1>Fancy meeting you here!</h1>
				<br />
				<h3>This is the 'About' page!</h3>
				<br />
				<img className="image" src={puppies2} alt="Puppies at the park (2)" />
      </div>
    )
  }
}

export default About;
