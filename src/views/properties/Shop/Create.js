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

class CreateShop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      sname: '',
      location: '',
      address: '',
      rooms: '',
      size: '',
      ewa: '',
      furnished: '',
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
    formData.append('sname', this.state.sname)
    formData.append('location', this.state.location)
    formData.append('address', this.state.address)
    formData.append('rooms', this.state.rooms)
    formData.append('size', this.state.size)
    formData.append('ewa', this.state.ewa)
    formData.append('furnished', this.state.furnished)
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
      url: '/prop/shop/admin_add_shop.php',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      // axios({
      //   method: 'post',
      //   url: 'http://192.168.100.96:8888/tenantpay/prop/shop/admin_add_shop.php',
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
        alert('New Shop Successfully Added.')
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
  }

  resetFile() {
    document.getElementsByName('file')[0].value = null
  }

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
                    <h1>Create Shop</h1>
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
                        placeholder="Name of Shop"
                        name="sname"
                        autoComplete="sname"
                        className="form-control"
                        value={this.state.sname}
                        onChange={(e) => this.setState({ sname: e.target.value })}
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
                        Create Shop
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
export default CreateShop
