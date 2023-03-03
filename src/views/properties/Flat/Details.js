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

class FlatDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      flat_name: '',
      building_name: '',
      location: '',
      address: '',
      rooms: '',
      bathroom: '',
      hall: '',
      size: '',
      ewa: '',
      furnished: '',
      pool: '',
      garden: '',
      security: '',
      cctv: '',
      parking: '',
      wifi: '',
      description: '',
      type: '',
      price: '',
      owner_email: '',
      tenant_email: '',
      mobile: '',
      start_date: '',
      end_date: '',
      properties: [],
      red: false,
    }
    this.deleteFlat = this.deleteFlat.bind(this)
  }

  componentDidMount() {
    API({
      method: 'get',
      // eslint-disable-next-line react/prop-types
      url: '/prop/flat/flat_details.php?id=' + this.props.match.params.id.slice(1),
    })
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        this.setState({
          id: data[0]['id'],
          owner_email: data[0]['owner_email'],
          flat_name: data[0]['flat_name'],
          building_name: data[0]['building_name'],
          location: data[0]['location'],
          address: data[0]['address'],
          rooms: data[0]['rooms'],
          bathroom: data[0]['bathrooms'],
          hall: data[0]['hall'],
          size: data[0]['size'],
          ewa: data[0]['ewa'],
          furnished: data[0]['furnished'],
          pool: data[0]['pool'],
          garden: data[0]['garden'],
          security: data[0]['security'],
          cctv: data[0]['cctv'],
          parking: data[0]['parking'],
          wifi: data[0]['wifi'],
          description: data[0]['description'],
          type: data[0]['type'],
          price: data[0]['price'],
          tenant_email: data[0]['tenant_email'],
          mobile: data[0]['mobile'],
          start_date: data[0]['start_date'],
          end_date: data[0]['end_date'],
        })
      })
  }

  deleteFlat(id, event) {
    //alert(id)
    event.preventDefault()
    if (window.confirm('Are you sure want to delete?')) {
      API({
        method: 'get',
        url: '/prop/flat/admin_delete.php?id=' + id,
      })
        .then(function (response) {
          //handle success
          console.log(response)
          if (response.status === 200) {
            alert('Flat deleted successfully')
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

  //   viewImages(event) {
  //     event.preventDefault()
  //     let formData = new FormData()
  //     formData.append('flatname', this.state.flat_name)
  //     formData.append('buildingname', this.state.building_name)
  //     formData.append('flatlocation', this.state.location)

  //     API({
  //       method: 'post',
  //       url: '/prop/flat/view_flat_gallery.php',

  //       data: formData,
  //       config: { headers: { 'Content-Type': 'multipart/form-data' } },
  //     })
  //       .then(function (response) {
  //         //handle success
  //         console.log(response)
  //         if (response.status === 200) {
  //           //alert('User updated successfully.')
  //         }
  //       })
  //       .catch(function (response) {
  //         //handle error
  //         console.log(response)
  //       })
  //   }

  render() {
    if (this.state.red) {
      return <Navigate to="/properties/flat/list" />
    }
    return (
      <div className="container">
        <h1 className="page-header text-center">Property Management</h1>

        <div className="">
          <h3>Flat Details</h3>
          <CContainer>
            <CRow className="align-items-start">
              <CCol>
                <p>
                  <Link
                    to={`/properties/flat/images:${this.state.id}`}
                    className="btn btn-primary btn-xs"
                  >
                    View Images
                  </Link>
                </p>
              </CCol>
              <CCol>
                <p>
                  <Link
                    to={`/properties/flat/edit:${this.state.id}`}
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
                    onClick={this.deleteFlat.bind(this, this.state.id)}
                    className="btn btn-danger btn-xs"
                  >
                    Delete Flat
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
                    <div>Flat</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.flat_name}</div>
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
                    <div>Bathroom</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.bathroom}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Hall</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.hall}</div>
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
                    <div>Pool</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.pool}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Garden</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.garden}</div>
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
                    <div>Type</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.type}</div>
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
export default withRouter(FlatDetails)
