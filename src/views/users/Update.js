import React from 'react'
import API from 'src/api'
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
  CFormSelect,
} from '@coreui/react'
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
    API({
      method: 'get',
      // eslint-disable-next-line react/prop-types
      url: '/users/edit.php?id=' + this.props.match.params.id.slice(1),
    })
      //   //API.get('/api/user/users.php' + this.props.match.params.id, { headers })

      .then((response) => response.data)
      .then((data) => {
        // handle success
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
    // eslint-disable-next-line react/prop-types
    formData.append('id', this.props.match.params.id.slice(1))
    formData.append('email', this.state.email)
    formData.append('password', this.state.password)
    formData.append('fname', this.state.fname)
    formData.append('lname', this.state.lname)
    formData.append('cpr', this.state.cpr)
    formData.append('mobile', this.state.mobile)
    formData.append('usertype', this.state.usertype)

    API({
      method: 'post',
      url: '/users/update_user.php',

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
                      <CInputGroupText>Email</CInputGroupText>
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
                      <CInputGroupText>Password</CInputGroupText>
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
                      <CInputGroupText>First Name</CInputGroupText>
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
                      <CInputGroupText>Last Name</CInputGroupText>
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
                      <CInputGroupText>CPR</CInputGroupText>
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
                      <CInputGroupText>Mobile</CInputGroupText>
                      <CFormInput
                        placeholder="Mobile"
                        name="mobile"
                        autoComplete="mobile"
                        className="form-control"
                        value={this.state.mobile}
                        default={this.state.mobile}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="usertype">
                        User Type
                      </CInputGroupText>
                      <CFormSelect
                        id="usertype"
                        name="usertype"
                        value={this.state.usertype}
                        onChange={(e) => this.setState({ usertype: e.target.value })}
                      >
                        <option value="Tenant">Tenant</option>
                        <option value="Owner">Owner</option>
                      </CFormSelect>
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success" onClick={(e) => this.handleSubmit(e)}>
                        Update Details
                      </CButton>
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
