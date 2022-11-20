import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class EditUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
    this.headers = [
      { key: 'id', label: 'Id' },
      { key: 'email', label: 'Email' },
      { key: 'password', label: 'Password' },
      { key: 'fname', label: 'First Name' },
      { key: 'lname', label: 'Last Name' },
      { key: 'cpr', label: 'CPR' },
      { key: 'mobile', label: 'Mobile' },
      { key: 'usertype', label: 'Usertype' },
    ]
    this.deleteUser = this.deleteUser.bind(this)
  }
  componentDidMount() {
    const url = 'http://192.168.100.96:8888/tenantpay/api/user/users.php'
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ users: data })
        console.log(this.state.users)
      })
  }

  deleteUser(id, event) {
    //alert(id)
    event.preventDefault()
    if (window.confirm('Are you sure want to delete?')) {
      axios({
        method: 'post',
        url: 'http://192.168.100.96:8888/tenantpay/api/user/users.php?delete=' + id,
      })
        .then(function (response) {
          //handle success
          console.log(response)
          if (response.status === 200) {
            alert('User deleted successfully')
          }
        })
        .catch(function (response) {
          //handle error
          console.log(response)
        })
    }
  }

  render() {
    return (
      <div className="container">
        <h1>User Management</h1>
        <p>
          <Link to="/user/create" className="btn btn-primary btn-xs">
            Add New User
          </Link>{' '}
        </p>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              {this.headers.map(function (h) {
                return <th key={h.key}>{h.label}</th>
              })}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(
              function (item, key) {
                return (
                  <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.cpr}</td>
                    <td>{item.mobile}</td>
                    <td>{item.usertype}</td>
                    <td>
                      <Link to={`/user/update:${item.id}`} className="btn btn-primary btn-xs">
                        Edit
                      </Link>

                      <Link
                        to="#"
                        onClick={this.deleteUser.bind(this, item.id)}
                        className="btn btn-danger btn-xs"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                )
              }.bind(this),
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
export default EditUser
