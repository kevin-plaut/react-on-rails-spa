import React, { Component } from 'react'
import AuthService from '../../services/AuthService'
import puppies1 from '../../assets/images/puppies-park-1.png'

const Auth = new AuthService()

class Home extends Component {
	render () {
		return (
			<div className="center">
        <h1>Hey there!</h1>
				<br />
				<h3>This is the 'Home' page<br />...and these are our puppies!</h3>
				<br />
				<img className="image" src={puppies1} alt="Puppies at the park (1)"/>
			</div>
    )
  }
}

export default Home;
