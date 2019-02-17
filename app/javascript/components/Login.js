import React from 'react'

class Login extends React.Component {
	render () {
		return (
      <div>
        <h1>Login</h1>
        <form>
          <input
            className="form-item"
            placeholder="email goes here..."
            name="email"
            type="text"
          />
          <input
            className="form-item"
            placeholder="Password goes here..."
            name="password"
            type="password"
          />
          <input
            className="form-submit"
            value="SUBMIT"
            type="submit"
          />
        </form>
      </div>
    )
  }
}

export default Login
