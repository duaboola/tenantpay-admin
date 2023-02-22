import React, { Component } from 'react'
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
// import { PostData } from '../../services/PostData'
// import { Navigate } from 'react-router-dom'
import API from 'src/api'

class Createuser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      fname: '',
      lname: '',
      cpr: '',
      mobile: '',
      usertype: '',
      users: [],
    }
    // this.createuser = this.createuser.bind(this)
    // this.onChange = this.onChange.bind(this)
  }

  handleFormSubmit(event) {
    event.preventDefault()

    let formData = new FormData()
    formData.append('email', this.state.email)
    formData.append('password', this.state.password)
    formData.append('fname', this.state.fname)
    formData.append('lname', this.state.lname)
    formData.append('cpr', this.state.cpr)
    formData.append('mobile', this.state.mobile)
    formData.append('usertype', this.state.usertype)

    API({
      method: 'post',
      url: '/api/user/users.php',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then(function (response) {
        //handle success
        console.log(response)
        alert('New user Successfully Added.')
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
  }

  // createuser() {
  //   if (
  //     this.state.email &&
  //     this.state.password &&
  //     this.state.fname &&
  //     this.state.lname &&
  //     this.state.cpr &&
  //     this.state.mobile &&
  //     this.state.usertype
  //   ) {
  //     PostData('createuser', this.state).then((result) => {
  //       let responseJson = result
  //       if (responseJson.userData) {
  //         sessionStorage.setItem('usersData', JSON.stringify(responseJson))
  //         this.setState({ redirectToReferrer: true })
  //       } else alert(result.error)
  //     })
  //   }
  // }
  // onChange(e) {
  //   this.setState({ [e.target.name]: e.target.value })
  // }
  render() {
    // if (this.state.redirectToReferrer || sessionStorage.getItem('usersData')) {
    //   return <Navigate to={'/home'} />
    // }
    return (
      <div className="bg-light d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Create User</h1>
                    <p className="text-medium-emphasis">Fill the details</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput
                        placeholder="Email"
                        name="email"
                        autoComplete="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
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
                        onChange={(e) => this.setState({ password: e.target.value })}
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
                        onChange={(e) => this.setState({ fname: e.target.value })}
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
                        onChange={(e) => this.setState({ lname: e.target.value })}
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
                        onChange={(e) => this.setState({ cpr: e.target.value })}
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
                        onChange={(e) => this.setState({ mobile: e.target.value })}
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
                        onChange={(e) => this.setState({ usertype: e.target.value })}
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success" onClick={(e) => this.handleFormSubmit(e)}>
                        Create Account
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
export default Createuser
