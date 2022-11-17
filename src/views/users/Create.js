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
import { PostData } from '../../services/PostData'
import { Navigate } from 'react-router-dom'

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
      redirectToReferrer: false,
    }
    this.createuser = this.createuser.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  createuser() {
    if (
      this.state.email &&
      this.state.password &&
      this.state.fname &&
      this.state.lname &&
      this.state.cpr &&
      this.state.mobile &&
      this.state.usertype
    ) {
      PostData('createuser', this.state).then((result) => {
        let responseJson = result
        if (responseJson.userData) {
          sessionStorage.setItem('usersData', JSON.stringify(responseJson))
          this.setState({ redirectToReferrer: true })
        } else alert(result.error)
      })
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem('usersData')) {
      return <Navigate to={'/home'} />
    }
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
                        onChange={this.onChange}
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
                        onChange={this.onChange}
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
                        onChange={this.onChange}
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
                        onChange={this.onChange}
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
                        onChange={this.onChange}
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
                        onChange={this.onChange}
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
                        onChange={this.onChange}
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success" onClick={this.createuser}>
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
