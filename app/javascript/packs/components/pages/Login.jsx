import React, { Component } from 'react'
import { Redirect, NavLink } from 'react-router-dom'
import { Card, FormControl, Form } from 'react-bootstrap'
import AuthService from '../../services/AuthService'

const Auth = new AuthService()

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      loginSuccess: false
    }
  }

  handleChange(event){
    let login = this.state
    login[event.target.name] = event.target.value
    this.setState({ login })
  }

  handleSubmit(event){
    event.preventDefault()
    Auth.login(this.state.email, this.state.password)
      .then (successUser => {
        console.log("Login Success", successUser);
        this.setState({loginSuccess: true});
      })
      .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div className="center">
        <h1>
          Login
        </h1>
        <br />
        <Form className="login-form">
          <FormControl
            className="login-form-control"
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange.bind(this)}
            value={this.state.email}
          />
          <FormControl
            className="login-form-control"
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange.bind(this)}
            value={this.state.password}
          />
          <br />
          <FormControl
            className="login-form-control"
            type="submit"
            name="submit"
            onClick={this.handleSubmit.bind(this)}
          />
        </Form>
        {this.state.loginSuccess && <Redirect to="/welcome" />}
        <br />
        <div>
          Don't have an account?&nbsp;
          <NavLink to="/signup">
            <a href="/signup">
              Sign up
            </a>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default Login;
