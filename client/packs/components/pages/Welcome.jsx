import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import AuthService from '../../services/AuthService'
import UserService from '../../services/UserService'
import withAuth from '../../services/withAuth'
import puppies3 from '../../assets/images/puppies-park-3.png'

const Auth = new AuthService()
const User = new UserService()

class Welcome extends Component {
  constructor() {
    super()
    this.state = {
      user_name: "",
      clickedCreatePost: false
    }
  }

  componentDidMount() {
    User.getUserName(Auth.getToken(), Auth.getUserId())
      .then(user_name => {
        return Promise.all(user_name.user_name)
      })
      .then(user_name => {
        this.setState({ user_name })
      })
      .catch(error => console.log(error))
  }

  clickCreatePost() {
    this.setState({clickedCreatePost: true})
  }

  render() {
    return (
      <div>
        <div className="center">
          <h2>
            Welcome, {this.state.user_name}!
          </h2>
          <br />
          <Button
            variant="dark"
            type="submit"
            onClick={this.clickCreatePost.bind(this)}
          >
            CREATE A POST
          </Button>
          {this.state.clickedCreatePost && <Redirect to="/newpost" />}
          <br />
          <img
            className="welcome-image"
            src={puppies3}
            alt="Puppies at the park (3)"
          />
        </div>
      </div>
    )
  }
}

export default withAuth(Welcome)
