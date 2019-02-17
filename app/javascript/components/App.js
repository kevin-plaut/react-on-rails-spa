import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../components/Login'
import About from '../components/About'

class App extends React.Component {
	render () {
		return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    )
  }
}
export default App
