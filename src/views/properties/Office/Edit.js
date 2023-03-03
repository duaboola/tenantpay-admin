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
import API from 'src/api'
import { useParams } from 'react-router-dom'

export function withRouter(Children) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const match = { params: useParams() }
    return <Children {...props} match={match} />
  }
}

class EditOffice extends Component {
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
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentDidMount() {
    API({
      method: 'get',
      // eslint-disable-next-line react/prop-types
      url: '/prop/office/admin_edit_office.php?id=' + this.props.match.params.id.slice(1),
    })
      .then((response) => response.data)
      .then((data) => {
        // handle success
        console.log(data)
        this.setState({
          id: data[0]['id'],
          fname: data[0]['office_name'],
          bname: data[0]['building_name'],
          location: data[0]['location'],
          address: data[0]['address'],
          rooms: data[0]['rooms'],
          reception: data[0]['reception'],
          dining: data[0]['dining'],
          meeting: data[0]['meetingspace'],
          capacity: data[0]['capacity'],
          size: data[0]['size'],
          ewa: data[0]['ewa'],
          furnished: data[0]['furnished'],
          security: data[0]['security'],
          cctv: data[0]['cctv'],
          parking: data[0]['parking'],
          wifi: data[0]['wifi'],
          description: data[0]['description'],
          price: data[0]['price'],
          email: data[0]['owner_email'],
          tenant_email: data[0]['tenant_email'],
          mobile: data[0]['mobile'],
          start_date: data[0]['start_date'],
          end_date: data[0]['end_date'],
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

  handleFormSubmit(event) {
    event.preventDefault()

    let formData = new FormData()
    // eslint-disable-next-line react/prop-types
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
    API({
      method: 'post',
      url: '/prop/office/admin_update_office.php',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then(function (response) {
        //handle success
        console.log(response)

        alert('Office Details are Successfully Updated.')
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
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
                    <h1>Edit Office</h1>
                    <p className="text-medium-emphasis">Fill the details</p>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Email of owner"
                        name="email"
                        autoComplete="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Name of office"
                        name="fname"
                        autoComplete="fname"
                        className="form-control"
                        value={this.state.fname}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Name of Building"
                        name="bname"
                        autoComplete="bname"
                        className="form-control"
                        value={this.state.bname}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Location"
                        name="location"
                        autoComplete="location"
                        className="form-control"
                        value={this.state.location}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Address"
                        name="address"
                        autoComplete="address"
                        className="form-control"
                        value={this.state.address}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="rooms">
                        Rooms
                      </CInputGroupText>
                      <CFormSelect
                        id="rooms"
                        name="rooms"
                        value={this.state.rooms}
                        onChange={(e) => this.setState({ rooms: e.target.value })}
                      >
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
                        value={this.state.ewa}
                        onChange={(e) => this.setState({ ewa: e.target.value })}
                      >
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
                        value={this.state.furnished}
                        onChange={(e) => this.setState({ furnished: e.target.value })}
                      >
                        <option value="Not">Not</option>
                        <option value="Fully">Fully</option>
                        <option value="Semi">Semi</option>
                      </CFormSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="security">
                        Security
                      </CInputGroupText>
                      <CFormSelect
                        id="security"
                        name="security"
                        value={this.state.security}
                        onChange={(e) => this.setState({ security: e.target.value })}
                      >
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
                        value={this.state.cctv}
                        onChange={(e) => this.setState({ cctv: e.target.value })}
                      >
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
                        value={this.state.parking}
                        onChange={(e) => this.setState({ parking: e.target.value })}
                      >
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
                        value={this.state.wifi}
                        onChange={(e) => this.setState({ wifi: e.target.value })}
                      >
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
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Email of Tenant"
                        name="tenant_email"
                        autoComplete="tenant_email"
                        className="form-control"
                        value={this.state.tenant_email}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Contract Start Date"
                        name="start_date"
                        autoComplete="start_date"
                        className="form-control"
                        value={this.state.start_date}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Contract End Date"
                        name="end_date"
                        autoComplete="end_date"
                        className="form-control"
                        value={this.state.end_date}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success" onClick={(e) => this.handleFormSubmit(e)}>
                        Update Office Details
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
export default withRouter(EditOffice)
