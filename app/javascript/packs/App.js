import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import AuthService from './services/AuthService'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import LandingPage from './components/pages/LandingPage'
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login'
import About from './components/pages/About'

const Auth = new AuthService()

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null
    }
  }

  handleNewUser(user) {
    console.log(user)
  }

	render () {
		return (
      <div>
				<Header />
				<br />
				<br />
				<br />
        <br />
        <Switch>
          <Route exact path="/" component={LandingPage} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
        </Switch>
				<br />
				<Footer />
      </div>
    )
  }
}

export default withRouter(App);
