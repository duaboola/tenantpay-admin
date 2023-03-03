import React, { Component, ChangeEvent, useRef, useState } from 'react'
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
import axios from 'axios'
import API from 'src/api'
import { useParams } from 'react-router-dom'

class AddImage extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   id: '',
    //   fname: '',
    //   bname: '',
    //   location: '',
    //   address: '',
    //   rooms: '',
    //   bathroom: '',
    //   hall: '',
    //   size: '',
    //   ewa: '',
    //   furnished: '',
    //   pool: '',
    //   garden: '',
    //   security: '',
    //   cctv: '',
    //   parking: '',
    //   wifi: '',
    //   description: '',
    //   type: '',
    //   price: '',
    //   email: '',
    //   tenant_email: '',
    //   mobile: '',
    //   start_date: '',
    //   end_date: '',
    //   properties: [],
    // }
    // eslint-disable-next-line react/prop-types
    const type = this.props.history.location.state?.type
    // eslint-disable-next-line react-hooks/rules-of-hooks
  }

  handleFormSubmit(event) {
    event.preventDefault()

    let formData = new FormData()
    formData.append('fname', this.state.fname)
    formData.append('bname', this.state.bname)
    formData.append('location', this.state.location)
    formData.append('address', this.state.address)
    formData.append('rooms', this.state.rooms)
    formData.append('bathroom', this.state.bathroom)
    formData.append('hall', this.state.hall)
    formData.append('size', this.state.size)
    formData.append('ewa', this.state.ewa)
    formData.append('furnished', this.state.furnished)
    formData.append('pool', this.state.pool)
    formData.append('garden', this.state.garden)
    formData.append('security', this.state.security)
    formData.append('cctv', this.state.cctv)
    formData.append('parking', this.state.parking)
    formData.append('wifi', this.state.wifi)
    formData.append('description', this.state.description)
    formData.append('type', this.state.type)
    formData.append('price', this.state.price)
    formData.append('email', this.state.email)
    formData.append('tenant_email', this.state.tenant_email)
    formData.append('mobile', this.state.mobile)
    formData.append('start_date', this.state.start_date)
    formData.append('end_date', this.state.end_date)

    const url = '/prop/flat/add_flat.php'
    // API.post(url, { formData })
    //   .then(function (response) {
    //     //handle success
    //     console.log(response)
    //     alert('New flat Successfully Added.')
    //   })
    //   .catch(function (response) {
    //     //handle error
    //     console.log(response)
    //   })
    axios({
      method: 'post',
      url: 'http://192.168.100.96:8888/tenantpay/prop/flat/add_flat.php',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then(function (response) {
        //handle success
        console.log(response)
        alert('New flat Successfully Added.')
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    console.log(this.props.location.state.type)
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
                    <h1>Add Images</h1>
                    <p className="text-medium-emphasis">Select Files</p>
                    <div className="form-group p-5">
                      <input type="file" multiple />
                    </div>
                    <div className="d-grid">
                      <CButton color="success" onClick={(e) => this.handleFormSubmit(e)}>
                        Upload Images
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
export default AddImage
