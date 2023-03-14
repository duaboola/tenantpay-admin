import React from 'react'
import API from 'src/api'
import { Link } from 'react-router-dom'
import { CFormCheck } from '@coreui/react'

//Modal.setAppElement('#')

class SelectUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = { users: [], user: '' }
    this.headers = [
      { key: 'id', label: 'Id' },
      { key: 'email', label: 'Email' },
      { key: 'fname', label: 'First Name' },
      { key: 'lname', label: 'Last Name' },
    ]
    // this.handleInputChange = this.handleInputChange.bind(this)
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

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div className="container">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              {this.headers.map(function (h) {
                return <th key={h.key}>{h.label}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(function (item, key) {
              return (
                <tr key={key}>
                  <td>
                    <CFormCheck
                      id="flexCheckDefault"
                      label={item.id}
                      value={item.id}
                      name="user"
                      type="radio"
                      //   checked={item.u === item.id}
                      onChange={(e) => this.setState({ user: e.target.value })}
                      //onChange={this.handleInputChange}
                      //   onChange={(e) => this.setState({ user: e.target.user })}
                    />
                  </td>
                  <td>{item.email}</td>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
export default SelectUser
