import React, { Component } from 'react'
import puppies from '../../assets/images/puppies.png'

class LandingPage extends Component {
	render () {
		return (
      <div className='text'>
        <h1>Hey there!</h1>
				<br />
				<h2>This is the landing page<br />...and these are my puppies!</h2>
				<img className='image' src={puppies} />
      </div>
    )
  }
}

export default LandingPage;
