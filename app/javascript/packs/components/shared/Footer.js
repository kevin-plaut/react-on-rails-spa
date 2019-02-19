import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

class Footer extends Component {
	render () {
		return (
      <div>
        <Navbar bg="light" variant="light" expand="lg" fixed="bottom">
					<span>Footer</span>
				</Navbar>
      </div>
    )
  }
}

export default Footer;
