import React, { Component } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CForm,
  CRow,
  CFormInput,
} from '@coreui/react'
import API from 'src/api'
import { useParams } from 'react-router-dom'
import SelectUser from './User'

export function withRouter(Children) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const match = { params: useParams() }
    return <Children {...props} match={match} />
  }
}

class SelectDevice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      target: '',
      body: '',
      user: '',
      resposeArray: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files,
      resposeArray: [],
    })
  }

  handleFormSubmit(event) {
    event.preventDefault()

    let formData = new FormData()
    // eslint-disable-next-line react/prop-types
    formData.append('target', this.state.target)
    formData.append('title', this.state.title)
    formData.append('body', this.state.body)
    formData.append('user', this.state.user)

    // const url = '/prop/shop/add_shop_image.php'
    API({
      method: 'post',
      url: '/send_notification.php',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then(function (response) {
        //handle success
        console.log(response)
        alert('Notification sent successfully.')
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
  }

  render() {
    const { target } = this.state
    return (
      <div className="bg-light d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Select Device</h1>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="target">
                        Target
                      </CInputGroupText>
                      <CFormSelect
                        id="target"
                        name="target"
                        onChange={(e) => this.setState({ target: e.target.value })}
                      >
                        <option>Choose...</option>
                        <option value="All">All</option>
                        <option value="Tenants">Tenants Only</option>
                        <option value="Owners">Owners Only</option>
                        <option value="Other">Other</option>
                      </CFormSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Title"
                        name="title"
                        autoComplete="title"
                        className="form-control"
                        value={this.state.title}
                        onChange={(e) => this.setState({ title: e.target.value })}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Message"
                        name="body"
                        autoComplete="body"
                        className="form-control"
                        value={this.state.body}
                        onChange={(e) => this.setState({ body: e.target.value })}
                      />
                    </CInputGroup>
                    <div>{target === 'Other' && <SelectUser />}</div>
                    <div className="d-grid">
                      <CButton color="success" onClick={(e) => this.handleFormSubmit(e)}>
                        Send Notification
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
export default withRouter(SelectDevice)
