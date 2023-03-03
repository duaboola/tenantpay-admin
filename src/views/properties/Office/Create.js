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
  CFormSelect,
} from '@coreui/react'
//import axios from 'axios'
import API from 'src/api'

class CreateOffice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      oname: '',
      bname: '',
      location: '',
      address: '',
      rooms: '',
      reception: '',
      dining: '',
      meeting: '',
      capacity: '',
      size: '',
      ewa: '',
      furnished: '',
      eco: '',
      security: '',
      cctv: '',
      parking: '',
      wifi: '',
      description: '',
      price: '',
      email: '',
      tenant_email: '',
      mobile: '',
      start_date: '',
      end_date: '',
      properties: [],
      selectedFile: '',
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
    formData.append('oname', this.state.oname)
    formData.append('bname', this.state.bname)
    formData.append('location', this.state.location)
    formData.append('address', this.state.address)
    formData.append('rooms', this.state.rooms)
    formData.append('reception', this.state.reception)
    formData.append('dining', this.state.dining)
    formData.append('meeting', this.state.meeting)
    formData.append('capacity', this.state.capacity)
    formData.append('size', this.state.size)
    formData.append('ewa', this.state.ewa)
    formData.append('furnished', this.state.furnished)
    formData.append('eco', this.state.eco)
    formData.append('security', this.state.security)
    formData.append('cctv', this.state.cctv)
    formData.append('parking', this.state.parking)
    formData.append('wifi', this.state.wifi)
    formData.append('description', this.state.description)
    formData.append('price', this.state.price)
    formData.append('email', this.state.email)
    formData.append('tenant_email', this.state.tenant_email)
    formData.append('mobile', this.state.mobile)
    formData.append('start_date', this.state.start_date)
    formData.append('end_date', this.state.end_date)
    for (let i = 0; i < this.state.selectedFile.length; i++) {
      formData.append('file[]', this.state.selectedFile[i])
    }
    // const url = '/prop/flat/add_flat.php'
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
    API({
      method: 'post',
      url: '/prop/office/admin_add_office.php',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      // axios({
      //   method: 'post',
      //   url: 'http://192.168.100.96:8888/tenantpay/prop/office/admin_add_office.php',
      //   data: formData,
      //   config: { headers: { 'Content-Type': 'multipart/form-data' } },
      // })
      .then(function (response) {
        //handle success
        console.log(response)
        // eslint-disable-next-line react/prop-types
        // this.props.history.push({
        //   pathname: '/properties/gallery/add',
        //   state: {
        //     fname: this.state.fname,
        //     bname: this.state.bname,
        //     location: this.state.location,
        //     type: 'Flat',
        //   },
        // })
        // this.setState({ responseArray: response.formData })
        // this.resetFile()
        alert('New Office Successfully Added.')
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
  }

  resetFile() {
    document.getElementsByName('file')[0].value = null
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
                    <h1>Create Office</h1>
                    <p className="text-medium-emphasis">Fill the details</p>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Email of owner"
                        name="email"
                        autoComplete="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Name of Office"
                        name="oname"
                        autoComplete="oname"
                        className="form-control"
                        value={this.state.oname}
                        onChange={(e) => this.setState({ oname: e.target.value })}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Name of Building"
                        name="bname"
                        autoComplete="bname"
                        className="form-control"
                        value={this.state.bname}
                        onChange={(e) => this.setState({ bname: e.target.value })}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Location"
                        name="location"
                        autoComplete="location"
                        className="form-control"
                        value={this.state.location}
                        onChange={(e) => this.setState({ location: e.target.value })}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Address"
                        name="address"
                        autoComplete="address"
                        className="form-control"
                        value={this.state.address}
                        onChange={(e) => this.setState({ address: e.target.value })}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="rooms">
                        Rooms
                      </CInputGroupText>
                      <CFormSelect
                        id="rooms"
                        name="rooms"
                        onChange={(e) => this.setState({ rooms: e.target.value })}
                      >
                        <option>Choose...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="7">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </CFormSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="reception">
                        Reception
                      </CInputGroupText>
                      <CFormSelect
                        id="reception"
                        name="reception"
                        onChange={(e) => this.setState({ reception: e.target.value })}
                      >
                        <option>Choose...</option>
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                      </CFormSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="dining">
                        Dining
                      </CInputGroupText>
                      <CFormSelect
                        id="dining"
                        name="dining"
                        onChange={(e) => this.setState({ dining: e.target.value })}
                      >
                        <option>Choose...</option>
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                      </CFormSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="capacity">
                        Capacity
                      </CInputGroupText>
                      <CFormSelect
                        id="capacity"
                        name="capacity"
                        onChange={(e) => this.setState({ capacity: e.target.value })}
                      >
                        <option>Choose...</option>
                        <option value="1-5">1-5</option>
                        <option value="5-10">5-10</option>
                        <option value="11-20">11-20</option>
                        <option value="21-50">21-50</option>
                        <option value="50-100">50-100</option>
                        <option value="100+">100+</option>
                      </CFormSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="meeting">
                        Meeting Area
                      </CInputGroupText>
                      <CFormSelect
                        id="meeting"
                        name="meeting"
                        onChange={(e) => this.setState({ meeting: e.target.value })}
                      >
                        <option>Choose...</option>
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                      </CFormSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Size"
                        name="size"
                        autoComplete="size"
                        className="form-control"
                        value={this.state.size}
                        onChange={(e) => this.setState({ size: e.target.value })}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="ewa">
                        EWA
                      </CInputGroupText>
                      <CFormSelect
                        id="ewa"
                        name="ewa"
                        onChange={(e) => this.setState({ ewa: e.target.value })}
                      >
                        <option>Choose...</option>
                        <option value="Included">Included</option>
                        <option value="Not Included">Not Included</option>
                      </CFormSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="furnished">
                        Furnished
                      </CInputGroupText>
                      <CFormSelect
                        id="furnished"
                        name="furnished"
                        onChange={(e) => this.setState({ furnished: e.target.value })}
                      >
                        <option>Choose...</option>
                        <option value="Not">Not</option>
                        <option value="Fully">Fully</option>
                        <option value="Semi">Semi</option>
                      </CFormSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="eco">
                        Eco-Friendly
                      </CInputGroupText>
                      <CFormSelect
                        id="eco"
                        name="eco"
                        onChange={(e) => this.setState({ eco: e.target.value })}
                      >
                        <option>Choose...</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </CFormSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="security">
                        Security
                      </CInputGroupText>
                      <CFormSelect
                        id="security"
                        name="security"
                        onChange={(e) => this.setState({ security: e.target.value })}
                      >
                        <option>Choose...</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </CFormSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="cctv">
                        CCTV
                      </CInputGroupText>
                      <CFormSelect
                        id="cctv"
                        name="cctv"
                        onChange={(e) => this.setState({ cctv: e.target.value })}
                      >
                        <option>Choose...</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </CFormSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="parking">
                        Parking
                      </CInputGroupText>
                      <CFormSelect
                        id="parking"
                        name="parking"
                        onChange={(e) => this.setState({ parking: e.target.value })}
                      >
                        <option>Choose...</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </CFormSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="wifi">
                        Wifi
                      </CInputGroupText>
                      <CFormSelect
                        id="wifi"
                        name="wifi"
                        onChange={(e) => this.setState({ wifi: e.target.value })}
                      >
                        <option>Choose...</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </CFormSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Description"
                        name="description"
                        autoComplete="description"
                        className="form-control"
                        value={this.state.description}
                        onChange={(e) => this.setState({ description: e.target.value })}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Price"
                        name="price"
                        autoComplete="price"
                        className="form-control"
                        value={this.state.price}
                        onChange={(e) => this.setState({ price: e.target.value })}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Mobile"
                        name="mobile"
                        autoComplete="mobile"
                        className="form-control"
                        value={this.state.mobile}
                        onChange={(e) => this.setState({ mobile: e.target.value })}
                      />
                    </CInputGroup>
                    <p className="text-medium-emphasis">Select Files</p>
                    <div className="form-group p-5">
                      <input type="file" name="file" multiple onChange={this.handleInputChange} />
                    </div>
                    <div className="d-grid">
                      <CButton color="success" onClick={(e) => this.handleFormSubmit(e)}>
                        Create Office
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
export default CreateOffice
