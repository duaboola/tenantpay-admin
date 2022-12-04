import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { PostData } from '../../../services/PostData'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
    }
    this.login = this.login.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  login() {
    if (this.state.username && this.state.password) {
      PostData('login', this.state).then((result) => {
        let responseJson = result
        if (responseJson.userData) {
          sessionStorage.setItem('userData', JSON.stringify(responseJson))
          this.setState({ redirectToReferrer: true, isAuth: true })
        } else alert(result.error)
      })
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    if (this.state.redirectToReferrer) {
      return <Navigate to={'/dashboard'} />
    }
    /*if (sessionStorage.getItem('userData')) {
      return <Navigate to={'/home'} />
    }*/
    return (
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-medium-emphasis">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Username"
                          name="username"
                          autoComplete="username"
                          onChange={this.onChange}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          name="password"
                          autoComplete="current-password"
                          onChange={this.onChange}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={6}>
                          <CButton color="primary" className="px-4" onClick={this.login}>
                            Login
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
}
export default Login

/*<CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>*/
