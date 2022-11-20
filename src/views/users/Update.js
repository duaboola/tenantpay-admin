import React from 'react'
import axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useParams } from 'react-router-dom'

export function withRouter(Children) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const match = { params: useParams() }
    return <Children {...props} match={match} />
  }
}

class UserUpdate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      email: '',
      password: '',
      fname: '',
      lname: '',
      cpr: '',
      mobile: '',
      usertype: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios
      .get(
        'http://192.168.100.96:8888/tenantpay/api/user/users.php/${id}' +
          // eslint-disable-next-line react/prop-types
          this.props.match.params.id,
      )

      .then((response) => response.data)
      .then((data) => {
        // handle success
        console.log(data)
        console.log(data.id)
        this.setState({
          id: data.id,
          email: data.email,
          password: data.password,
          fname: data.fname,
          lname: data.lname,
          cpr: data.cpr,
          mobile: data.mobile,
          usertype: data.usertype,
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }

  handleChange(event) {
    const state = this.state
    state[event.target.name] = event.target.value
    this.setState(state)
  }

  handleSubmit(event) {
    event.preventDefault()
    let formData = new FormData()
    formData.append('email', this.state.email)
    formData.append('password', this.state.password)
    formData.append('fname', this.state.fname)
    formData.append('lname', this.state.lname)
    formData.append('cpr', this.state.cpr)
    formData.append('mobile', this.state.mobile)
    formData.append('usertype', this.state.usertype)

    axios({
      method: 'post',
      url:
        'http://192.168.100.96:8888/tenantpay/api/user/users.php/?id=' +
        // eslint-disable-next-line react/prop-types
        this.props.match.params.id,
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then(function (response) {
        //handle success
        console.log(response)
        if (response.status === 200) {
          alert('User updated successfully.')
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
  }

  render() {
    return (
      <div className="bg-light d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm onSubmit={this.handleSubmit}>
                    <h1>Edit User</h1>
                    <p className="text-medium-emphasis">Fill the details</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput
                        placeholder="Email"
                        name="email"
                        autoComplete="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        name="password"
                        autoComplete="new-password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="First Name"
                        name="fname"
                        autoComplete="fname"
                        className="form-control"
                        value={this.state.fname}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Last Name"
                        name="lname"
                        autoComplete="lname"
                        className="form-control"
                        value={this.state.lname}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="CPR"
                        name="cpr"
                        autoComplete="cpr"
                        className="form-control"
                        value={this.state.cpr}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Mobile"
                        name="mobile"
                        autoComplete="mobile"
                        className="form-control"
                        value={this.state.mobile}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Tenant / Owner"
                        name="usertype"
                        autoComplete="usertype"
                        className="form-control"
                        value={this.state.usertype}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success">Update Details</CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
}

export default withRouter(UserUpdate)

/*<div className="container">
        <h1 className="page-header text-center">Update Contact</h1>
        <Link to="/" className="btn btn-primary btn-xs">
          Home
        </Link>
        <div className="col-md-12">
          <div className="panel panel-primary">
            <div className="panel-body">
              <form onSubmit={this.handleSubmit}>
                <input type="hidden" name="id" value={this.state.id} />
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.handleChange}
                />

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleChange}
                />

                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  className="form-control"
                  value={this.state.country}
                  onChange={this.handleChange}
                />

                <label>City</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  value={this.state.city}
                  onChange={this.handleChange}
                />

                <label>Job</label>
                <input
                  type="text"
                  name="job"
                  className="form-control"
                  value={this.state.job}
                  onChange={this.handleChange}
                />
                <br />
                <input type="submit" className="btn btn-primary btn-block" value="Update Contact" />
              </form>
            </div>
          </div>
        </div>
      </div>*/
