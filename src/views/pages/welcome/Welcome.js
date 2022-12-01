import React, { Component } from 'react'
import './Welcome.css'
class Welcome extends Component {
  render() {
    return (
      <div className="row " id="body">
        <div className="callout headcolor" id="Header">
          <div className="row column">
            <a href="/">
              <h1 id="tit">TenantPay</h1>
            </a>
          </div>
        </div>
        <div className="medium-12 columns align-items-center">
          <h2 id="welcomeText">Please login to move forward</h2>
          <a href="/login" className="button ">
            Login
          </a>
        </div>
      </div>
    )
  }
}
export default Welcome
