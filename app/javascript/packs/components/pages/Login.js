import React, { Component } from 'react'
import puppies from '../../assets/images/puppies-park-2.png'

class About extends Component {
	render () {
		return (
      <div className='text'>
        <h1>Fancy meeting you here!</h1>
				<br />
				<h3>This is the 'About' page!</h3>
				<br />
				<img className='image' src={puppies} alt="Puppies at the park (2)" />
      </div>
    )
  }
}

export default About;
