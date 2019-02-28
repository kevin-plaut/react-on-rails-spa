import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import AuthService from '../../services/AuthService'

const Auth = new AuthService()

class Header extends Component {

  handleLogout() {
    Auth.logout()
    console.log("Logout Success")
  }

  render () {
    return (
      <div>
        <Navbar collapseOnSelect bg="light" variant="light" expand="lg" fixed="top">
          <NavLink to="/">
            <Navbar.Brand href="/">
              React-on-Rails SPA
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/">
                <Nav.Link href="/">
                  Home
                </Nav.Link>
              </NavLink>
              {!Auth.loggedIn() &&
                <NavLink to="/signup">
                  <Nav.Link href="/signup">
                    Sign Up
                  </Nav.Link>
                </NavLink>
              }
              {!Auth.loggedIn() &&
                <NavLink to="/login">
                  <Nav.Link href="/login">
                    Login
                  </Nav.Link>
                </NavLink>
              }
              {Auth.loggedIn() &&
                <NavLink to="/welcome">
                  <Nav.Link href="/welcome">
                    Welcome
                  </Nav.Link>
                </NavLink>
              }
              {Auth.loggedIn() &&
                <NavLink to="/newpost">
                  <Nav.Link href="/newpost">
                    New Post
                  </Nav.Link>
                </NavLink>
              }
              {Auth.loggedIn() &&
                <NavLink to="/viewposts">
                  <Nav.Link href="/viewposts">
                    Posts
                  </Nav.Link>
                </NavLink>
              }
              <NavLink to="/about">
                <Nav.Link href="/about">
                  About
                </Nav.Link>
              </NavLink>
              {Auth.loggedIn() &&
                <NavLink to="/login">
                  <Nav.Link href="/login" onClick={this.handleLogout.bind(this)}>
                    Logout
                  </Nav.Link>
                </NavLink>
              }
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;
