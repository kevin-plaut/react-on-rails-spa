import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, FormControl, Form } from 'react-bootstrap'
import AuthService from '../../services/AuthService'

class Login extends Component {
  constructor(){
    super()
    this.Auth = new AuthService()
    this.state={
      email: '',
      password: ''
    }
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(event){
    event.preventDefault()
    this.Auth.login(this.state.email, this.state.password)
    .then(res =>{
      this.props.history.replace('/welcome')
    })
    .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div className="center">
        <h2>Login</h2>
        <br />
        <Form>
          <FormControl
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange.bind(this)}
            value={this.state.email}
          />
          <FormControl
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange.bind(this)}
            value={this.state.password}
          />
          <br />
          <FormControl
            type="submit"
            name="submit"
            onClick={this.handleSubmit.bind(this)}
          />
        </Form>
        <br />
        <div>
          Don't have an account yet? <br />
					<NavLink to="/signup">
						<a href="/signup">Sign up here</a>
					</NavLink>
        </div>
      </div>
    )
  }
}

export default Login;
