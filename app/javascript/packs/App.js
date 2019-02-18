import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Api } from './api/api'
import Header from './components/shared/Header'
import LandingPage from './components/pages/LandingPage'
import About from './components/pages/About'

class App extends Component {
	render () {
		return (
      <div>
				{Api.helloWorld()}
				<Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    )
  }
}

export default App;
