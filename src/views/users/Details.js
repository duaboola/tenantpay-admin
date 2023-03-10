import React from 'react'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardBody,
  CContainer,
  CRow,
  CCol,
} from '@coreui/react'
import API from 'src/api'
import { useParams, Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function withRouter(Children) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const match = { params: useParams() }
    return <Children {...props} match={match} />
  }
}

class UserDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      fname: '',
      email: '',
      password: '',
      lname: '',
      cpr: '',
      mobile: '',
      usertype: '',
      license: '',
      cr: '',
      status: '',
      users: [],
      red: false,
      v: false,
    }
    this.deleteUser = this.deleteUser.bind(this)
    this.acceptUser = this.acceptUser.bind(this)
    this.rejectUser = this.rejectUser.bind(this)
  }

  componentDidMount() {
    API({
      method: 'get',
      // eslint-disable-next-line react/prop-types
      url: 'users/details.php?id=' + this.props.match.params.id.slice(1),
    })
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        this.setState({
          id: data[0]['id'],
          email: data[0]['email'],
          password: data[0]['secretword'],
          fname: data[0]['fname'],
          lname: data[0]['lname'],
          cpr: data[0]['cpr'],
          mobile: data[0]['mobile'],
          usertype: data[0]['usertype'],
        })
        if (data.length > 0) {
          this.setState({
            license: data[1]['license'] ? data[1]['license'] : '',
            cr: data[1]['cr'] ? data[1]['cr'] : '',
            status: data[1]['status'] ? data[1]['status'] : '',
            v: true,
          })
        }
      })
  }

  deleteUser(id, event) {
    //alert(id)
    event.preventDefault()
    if (window.confirm('Are you sure want to delete?')) {
      API({
        method: 'get',
        url: '/users/delete.php?id=' + id,
      })
        .then(function (response) {
          //handle success
          console.log(response)
          if (response.status === 200) {
            alert('User deleted successfully')
            this.setState({
              red: !this.state.red,
            })
          }
        })
        .catch(function (response) {
          //handle error
          console.log(response)
        })
    }
  }

  acceptUser(id, event) {
    //alert(id)
    event.preventDefault()
    if (window.confirm('Are you sure want to accept this user?')) {
      API({
        method: 'get',
        url: '/users/accept.php?id=' + id,
      })
        .then(function (response) {
          //handle success
          console.log(response)
          if (response.status === 200) {
            alert('User accepted successfully')
            window.location.reload(false)
          }
        })
        .catch(function (response) {
          //handle error
          console.log(response)
        })
    }
  }

  rejectUser(id, event) {
    //alert(id)
    event.preventDefault()
    if (window.confirm('Are you sure want to reject this user?')) {
      API({
        method: 'get',
        url: '/users/reject.php?id=' + id,
      })
        .then(function (response) {
          //handle success
          console.log(response)
          if (response.status === 200) {
            alert('User rejected successfully')
            window.location.reload(false)
          }
        })
        .catch(function (response) {
          //handle error
          console.log(response)
        })
    }
  }

  render() {
    if (this.state.red) {
      return <Navigate to="/properties/user/list" />
    }

    const type = this.state.usertype
    const s = this.state.status

    return (
      <div className="container">
        <h1 className="page-header text-center">Property Management</h1>

        <div className="">
          <h3>User Details</h3>
          <CContainer>
            <CRow className="align-items-start">
              {/*<CCol>
                 <p>
                  <Link
                    to={`/properties/user/images:${this.state.id}`}
                    className="btn btn-primary btn-xs"
                  >
                    View Images
                  </Link>
                </p>
              </CCol>
              <CCol>
                <p>
                  <Link
                    to={`/properties/user/edit:${this.state.id}`}
                    className="btn btn-secondary btn-xs"
                  >
                    Edit Details
                  </Link>
                </p>
              </CCol> */}
              <CCol>
                <p>
                  <Link
                    to="#"
                    onClick={this.deleteUser.bind(this, this.state.id)}
                    className="btn btn-danger btn-xs"
                  >
                    Delete User
                  </Link>
                </p>
              </CCol>
            </CRow>
          </CContainer>

          <CCardBody>
            <CTable align="middle" className="mb-0 border table-striped" hover responsive>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell>Property</CTableHeaderCell>
                  <CTableHeaderCell>Details</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>
                    <div>Email</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.email}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Password</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.password}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>First Name</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.fname}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Last Name</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.lname}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>CPR</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.cpr}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Mobile</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.mobile}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Profile Type</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.usertype}</div>
                  </CTableDataCell>
                </CTableRow>

                {type === 'tenant' ? null : (
                  <CTableRow>
                    <CTableDataCell>
                      <div>Documents</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>
                        <a
                          href={`http://192.168.100.96:8888/tenantpay/owner/${this.state.license}`}
                        >
                          {this.state.license}
                        </a>
                        ,
                        <a href={`http://192.168.100.96:8888/tenantpay/owner/${this.state.cr}`}>
                          {this.state.cr}
                        </a>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                )}
                <CTableRow>
                  <CTableDataCell>
                    <div>Status</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    {s === '0' ? (
                      <CRow className="align-items-start">
                        <CCol>
                          <p>
                            <Link
                              to="#"
                              onClick={this.acceptUser.bind(this, this.state.email)}
                              className="btn btn-success btn-xs"
                            >
                              Accept
                            </Link>
                          </p>
                        </CCol>
                        <CCol>
                          <p>
                            <Link
                              to="#"
                              onClick={this.rejectUser.bind(this, this.state.email)}
                              className="btn btn-danger btn-xs"
                            >
                              Reject
                            </Link>
                          </p>
                        </CCol>
                      </CRow>
                    ) : (
                      <div>{this.state.status}</div>
                    )}
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </div>
      </div>
    )
  }
}
export default withRouter(UserDetails)
