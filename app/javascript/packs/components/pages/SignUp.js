import React, { Component } from 'react'
import { Redirect, NavLink } from 'react-router-dom'
import { Table, Col, Row, FormControl, Form } from 'react-bootstrap'
import { createUser } from '../../api'
import AuthService from '../../services/AuthService'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      createSuccess: false,
    }
  }

  handleChange(event){
    let { user } = this.state
    user[event.target.name] = event.target.value
    this.setState({user: user})
  }

  handleSubmit(event){
    event.preventDefault()
      this.Auth.signup(this.state.user).then (successUser => {
      console.log("Create Success!", successUser); this.setState({createSuccess: true})
    })
    .catch(err =>{ alert(err) })
  }

  render(){
    return(
      <div className="center">
        <h2>Sign Up</h2>
        <br />
        <Form>
          <FormControl
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange.bind(this)}
          />
          <FormControl
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange.bind(this)}
          />
          <FormControl
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange.bind(this)}
          />
          <FormControl
            type="password"
            name="password_confirmation"
            placeholder="Confirm"
            onChange={this.handleChange.bind(this)}
          /><br/>
          <FormControl
            type="submit"
            name="submit"
            onClick={this.handleSubmit.bind(this)}
          />
        </Form>
        {this.state.createSuccess && <Redirect to="/login"/> }
        <div>
          Already have an account? <br />
          <NavLink to="/login">
            <a href="/login">Log in here</a>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default SignUp;
