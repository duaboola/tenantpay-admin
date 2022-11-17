import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
//import { AppHeader, AppSidebar } from 'src/components'
import DefaultLayout from 'src/layout/DefaultLayout'
import Dashboard from 'src/views/dashboard/Dashboard'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      redirectToReferrer: false,
      name: '',
    }

    this.logout = this.logout.bind(this)
  }
  logout() {
    //sessionStorage.setItem('userData', '')
    sessionStorage.clear()
    this.setState({ redirectToReferrer: true })
  }
  render() {
    if (this.state.redirectToReferrer) {
      return <Navigate to={'/login'} />
    }

    return (
      <div>
        <DefaultLayout />
        <Dashboard />
      </div>
    )
  }
}

export default Home

/*<div>
        <div className="row">
          <div className="col-2">
            <aside className="w-64" aria-label="Sidebar">
              <AppSidebar />
            </aside>
          </div>

          <div className="col-10">
            <AppHeader />

            <a href="##" onClick={this.logout} className="logout">
              Logout
            </a>
            <Dashboard />
          </div>
        </div>
      </div>*/
