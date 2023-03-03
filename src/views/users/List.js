import React from 'react'
import API from 'src/api'

class UserList extends React.Component {
  state = {
    id: '',
    fname: '',
    email: '',
    password: '',
    lname: '',
    cpr: '',
    mobile: '',
    usertype: '',
    users: [],
  }

  componentDidMount() {
    const url = 'users/list.php'
    API.get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ users: data })
        console.log(this.state.users)
      })
  }

  //   handleFormSubmit(event) {
  //     event.preventDefault()

  //     let formData = new FormData()
  //     formData.append('email', this.state.email)
  //     formData.append('fname', this.state.fname)
  //     formData.append('lname', this.state.lname)
  //     formData.append('cpr', this.state.cpr)
  //     formData.append('mobile', this.state.mobile)
  //     formData.append('usertype', this.state.usertype)

  //     axios({
  //       method: 'post',
  //       url: 'http://192.168.100.96:8888/tenantpay/api/user/users.php',
  //       data: formData,
  //       config: { headers: { 'Content-Type': 'multipart/form-data' } },
  //     })
  //       .then(function (response) {
  //         //handle success
  //         console.log(response)
  //         alert('New user Successfully Added.')
  //       })
  //       .catch(function (response) {
  //         //handle error
  //         console.log(response)
  //       })
  //   }

  render() {
    return (
      <div className="container">
        <h1 className="page-header text-center">User Management</h1>

        <div className="col-md-8">
          <h3>User Table</h3>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Email</th>
                <th>Password</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>CPR</th>
                <th>Mobile</th>
                <th>User Type</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.secretword}</td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.cpr}</td>
                  <td>{user.mobile}</td>
                  <td>{user.usertype}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default UserList

/*<div className="col-md-4">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <span className="glyphicon glyphicon-user"></span> Add New User
            </div>
            <div className="panel-body">
              <form>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />

                <label>First Name</label>
                <input
                  type="text"
                  name="fname"
                  className="form-control"
                  value={this.state.fname}
                  onChange={(e) => this.setState({ fname: e.target.value })}
                />

                <label>Last Name</label>
                <input
                  type="text"
                  name="lname"
                  className="form-control"
                  value={this.state.lname}
                  onChange={(e) => this.setState({ lname: e.target.value })}
                />

                <label>CPR</label>
                <input
                  type="text"
                  name="cpr"
                  className="form-control"
                  value={this.state.cpr}
                  onChange={(e) => this.setState({ cpr: e.target.value })}
                />
                <label>Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  className="form-control"
                  value={this.state.mobile}
                  onChange={(e) => this.setState({ mobile: e.target.value })}
                />

                <label>User Type</label>
                <input
                  type="text"
                  name="usertype"
                  className="form-control"
                  value={this.state.usertype}
                  onChange={(e) => this.setState({ usertype: e.target.value })}
                />
                <br />
                <input
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={(e) => this.handleFormSubmit(e)}
                  value="Create User"
                />
              </form>
            </div>
          </div>
        </div>*/
