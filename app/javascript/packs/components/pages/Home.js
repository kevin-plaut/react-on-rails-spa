import React, { Component } from 'react'
import puppies1 from '../../assets/images/puppies-park-1.png'

class Home extends Component {
	render() {
		return (
			<div className="center">
        <h1>
					Home
				</h1>
				<br />
				<h3>
					Hey there... check
					<br />
					out our puppies!
				</h3>
				<br />
				<img className="image" src={puppies1} alt="Puppies at the park (1)"/>
			</div>
    )
  }
}

export default Home;
