import React from 'react'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardBody,
  CContainer,
  CRow,
  CCol,
} from '@coreui/react'
import API from 'src/api'
import { useParams, Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function withRouter(Children) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const match = { params: useParams() }
    return <Children {...props} match={match} />
  }
}

class OfficeDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      building: '',
      location: '',
      address: '',
      rooms: '',
      recpetion: '',
      dining: '',
      capacity: '',
      size: '',
      ewa: '',
      furnished: '',
      meeting: '',
      security: '',
      cctv: '',
      parking: '',
      wifi: '',
      eco: '',
      description: '',
      price: '',
      owner_email: '',
      tenant_email: '',
      mobile: '',
      start_date: '',
      end_date: '',
      properties: [],
      red: false,
    }
    this.deleteOffice = this.deleteOffice.bind(this)
  }

  componentDidMount() {
    API({
      method: 'get',
      // eslint-disable-next-line react/prop-types
      url: '/prop/office/office_details.php?id=' + this.props.match.params.id.slice(1),
    })
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        this.setState({
          id: data[0]['id'],
          owner_email: data[0]['owner_email'],
          office_name: data[0]['office_name'],
          building_name: data[0]['building_name'],
          location: data[0]['location'],
          address: data[0]['address'],
          rooms: data[0]['rooms'],
          reception: data[0]['reception'],
          dining: data[0]['dining'],
          capacity: data[0]['capacity'],
          meeting: data[0]['meetingspace'],
          size: data[0]['size'],
          ewa: data[0]['ewa'],
          furnished: data[0]['furnished'],
          security: data[0]['security'],
          cctv: data[0]['cctv'],
          eco: data[0]['ecofriendly'],
          parking: data[0]['parking'],
          wifi: data[0]['wifi'],
          description: data[0]['description'],
          price: data[0]['price'],
          tenant_email: data[0]['tenant_email'],
          mobile: data[0]['mobile'],
          start_date: data[0]['start_date'],
          end_date: data[0]['end_date'],
        })
      })
  }

  deleteOffice(id, event) {
    //alert(id)
    event.preventDefault()
    if (window.confirm('Are you sure want to delete?')) {
      API({
        method: 'get',
        url: '/prop/office/admin_delete.php?id=' + id,
      })
        .then(function (response) {
          //handle success
          console.log(response)
          if (response.status === 200) {
            alert('Office deleted successfully')
            this.setState({
              red: !this.state.red,
            })
          }
        })
        .catch(function (response) {
          //handle error
          console.log(response)
        })
    }
  }

  render() {
    if (this.state.red) {
      return <Navigate to="/properties/office/list" />
    }
    return (
      <div className="container">
        <h1 className="page-header text-center">Property Management</h1>

        <div className="">
          <h3>Office Details</h3>
          <CContainer>
            <CRow className="align-items-start">
              <CCol>
                <p>
                  <Link
                    to={`/properties/office/images:${this.state.id}`}
                    className="btn btn-primary btn-xs"
                  >
                    View Images
                  </Link>
                </p>
              </CCol>
              <CCol>
                <p>
                  <Link
                    to={`/properties/office/edit:${this.state.id}`}
                    className="btn btn-secondary btn-xs"
                  >
                    Edit Details
                  </Link>
                </p>
              </CCol>
              <CCol>
                <p>
                  <Link
                    to="#"
                    onClick={this.deleteOffice.bind(this, this.state.id)}
                    className="btn btn-danger btn-xs"
                  >
                    Delete Office
                  </Link>
                </p>
              </CCol>
            </CRow>
          </CContainer>

          <CCardBody>
            <CTable align="middle" className="mb-0 border table-striped" hover responsive>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell>Property</CTableHeaderCell>
                  <CTableHeaderCell>Details</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>
                    <div>Owner Email</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.owner_email}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Office</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.office_name}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Building</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.building_name}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Location</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.location}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Address</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.address}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Rooms</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.rooms}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Reception</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.reception}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Dining</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.dining}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Capacity</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.capacity}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Meeting Area</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.meeting}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Size</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.size}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>EWA</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.ewa}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Furnished</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.furnished}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Eco Friendly</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.eco}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Security</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.security}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>CCTV</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.cctv}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Parking</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.parking}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Wifi</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.wifi}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Description</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.description}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Price</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.price}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Tenant Email</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.tenant_email}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Start Date</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.start_date}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>End Date</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.end_date}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Mobile</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.mobile}</div>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </div>
      </div>
    )
  }
}
export default withRouter(OfficeDetails)
