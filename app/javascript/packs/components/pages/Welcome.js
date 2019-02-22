import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { ListGroupItem, ListGroup } from 'react-bootstrap'
import AuthService from '../../services/AuthService'
import puppies3 from '../../assets/images/puppies-park-3.png'

const Auth = new AuthService()

class Welcome extends Component {
	render () {
		return (
			<div>
				{!Auth.loggedIn() &&
					<Redirect to="/"/>
				}
				{Auth.loggedIn() &&
		      <div className="center">
		        <h1>Welcome</h1>
						<br />
						<h3>Thanks for logging in!</h3>
						<br />
						{/* }<ListGroup>
              {this.props.posts.map((post, index) =>{
                return (
                  <ListGroupItem
                    key={index}
                    header={
                      <h4>
                        <span>
                          {post.post}
                        </span>
                      </h4>
                    }>
                	</ListGroupItem>
              	)
            	})}
          	</ListGroup> */}
						<br />
						<img className="image" src={puppies3} alt="Puppies at the park (3)" />
					</div>
				}
      </div>
    )
  }
}

export default Welcome;
