import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
        <form className="px-4 py-3">
          <div>
            <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
          </div>
          <div>
            <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
              <label htmlFor="dropdownCheck" className="form-check-label">Remember</label>
            </div>
          </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">New around here? Sign up</a>
        <a className="dropdown-item" href="#">Forgot password?</a>
      </div>
    </div>
    )
  }
}
