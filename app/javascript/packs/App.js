import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Api } from './api/api'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import LandingPage from './components/pages/LandingPage'
import About from './components/pages/About'

class App extends Component {
	render () {
		return (
      <div>
				{Api.helloWorld()}
				<Header />
				<br />
				<br />
				<br />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
        </Switch>
				<br />
				<Footer />
      </div>
    )
  }
}

export default App;
