import React, { Component } from 'react'
import { Redirect, NavLink } from 'react-router-dom'
import { Table, Col, Row, FormControl, Form } from 'react-bootstrap'
import AuthService from '../../services/AuthService'

const Auth = new AuthService()

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        last_login: ""
      },
      createSuccess: false
    }
  }

  handleChange(event) {
    let { user } = this.state
    user[event.target.name] = event.target.value
    this.setState({user: user})
  }

  handleSubmit(event) {
    event.preventDefault()
    Auth.signup(this.state.user)
      .then (successUser => {
        console.log("Sign Up Success", successUser); this.setState({createSuccess: true})
      })
    .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div className="center">
        <h1>
          Sign Up
        </h1>
        <br />
        <Form className="signup-form">
          <FormControl
            className="signup-form-control"
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange.bind(this)}
          />
          <FormControl
            className="signup-form-control"
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange.bind(this)}
          />
          <FormControl
            className="signup-form-control"
            type="password"
            name="password"
            placeholder="Password (min 8 characters)"
            onChange={this.handleChange.bind(this)}
          />
          <FormControl
            className="signup-form-control"
            type="password"
            name="password_confirmation"
            placeholder="Confirm"
            onChange={this.handleChange.bind(this)}
          /><br/>
          <FormControl
            className="signup-form-control"
            type="submit"
            name="submit"
            onClick={this.handleSubmit.bind(this)}
          />
        </Form>
        {this.state.createSuccess && <Redirect to="/welcome" />}
        <br />
        <div>
          Already have an account?&nbsp;
          <NavLink to="/login">
            <a href="/login">
              Login
            </a>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default SignUp;
