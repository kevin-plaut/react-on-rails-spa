import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Header from './components/shared/Header'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login'
import Welcome from './components/pages/Welcome'
import About from './components/pages/About'
import NewPost from './components/pages/NewPost'
import Posts from './components/pages/Posts'
import Footer from './components/shared/Footer'
import AuthService from './services/AuthService'
import withAuth from './services/withAuth'
import { getPosts } from './api'

const Auth = new AuthService()

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: null,
    }
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
          <Route exact path="/" component={Home} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/login" component={Login} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/about" component={About} />
          <Route exact path="/newpost" component={NewPost} />
          <Route exact path="/viewposts" component={Posts} />
        </Switch>
        <br />
        <br />
				<Footer />
      </div>
    )
  }
}

export default withRouter(App);
