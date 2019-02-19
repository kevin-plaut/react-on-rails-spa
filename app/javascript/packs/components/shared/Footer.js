import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

class Footer extends Component {
	render () {
		return (
      <div>
        <Navbar bg="light" variant="light" expand="lg" fixed="bottom">
					<div>
						<span>React-on-Rails SPA by </span>
						<a href="https://github.com/ChiefDakota" target="new">ChiefDakota</a>
						<span> and </span>
						<a href="https://github.com/DenisePillette" target="new"> DenisePillette</a>
					</div>
				</Navbar>
      </div>
    )
  }
}

export default Footer;
