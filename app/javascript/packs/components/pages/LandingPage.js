import React, { Component } from 'react'
import puppies from '../../assets/images/puppies-park-1.png'

class LandingPage extends Component {
	render () {
		return (
			<div className='text'>
        <h1>Hey there!</h1>
				<br />
				<h3>This is the 'Home' page<br />...and these are our puppies!</h3>
				<br />
				<img className='image' src={puppies} alt="Puppies at the park (1)"/>
			</div>
    )
  }
}

export default LandingPage;
