import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light" expand="lg" fixed="bottom">
          <div>
            <span>
              React-on-Rails SPA by&nbsp;
            </span>
            <a href="https://github.com/ChiefDakota" target="new">
              ChiefDakota
            </a>
            <span>
              &nbsp;and&nbsp;
            </span>
            <a href="https://github.com/DenisePillette" target="new">
              DenisePillette
            </a>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default Footer;
