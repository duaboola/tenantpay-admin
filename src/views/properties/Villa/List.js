import React from 'react'
import API from 'src/api'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardBody,
} from '@coreui/react'

class VillaList extends React.Component {
  state = {
    id: '',
    name: '',
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
    bbq: '',
    wifi: '',
    description: '',
    price: '',
    owner_email: '',
    tenant_email: '',
    mobile: '',
    start_date: '',
    end_date: '',
    properties: [],
  }

  componentDidMount() {
    const url = '/api/properties/villa/villa.php'
    API.get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ properties: data })
        console.log(this.state.properties)
      })
  }

  render() {
    return (
      <div className="container">
        <h1 className="page-header text-center">Property Management</h1>

        <div className="">
          <h3>Villa</h3>
          <CCardBody>
            <CTable align="middle" className="mb-0 border table-striped" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Id</CTableHeaderCell>
                  <CTableHeaderCell>Owner</CTableHeaderCell>
                  <CTableHeaderCell>Villa</CTableHeaderCell>
                  <CTableHeaderCell>Location</CTableHeaderCell>
                  <CTableHeaderCell>Address</CTableHeaderCell>
                  <CTableHeaderCell>Rooms</CTableHeaderCell>
                  <CTableHeaderCell>Bathroom</CTableHeaderCell>
                  <CTableHeaderCell>Hall</CTableHeaderCell>
                  <CTableHeaderCell>Size</CTableHeaderCell>
                  <CTableHeaderCell>EWA</CTableHeaderCell>
                  <CTableHeaderCell>Furnished</CTableHeaderCell>
                  <CTableHeaderCell>Pool</CTableHeaderCell>
                  <CTableHeaderCell>Garden</CTableHeaderCell>
                  <CTableHeaderCell>Parking</CTableHeaderCell>
                  <CTableHeaderCell>CCTV</CTableHeaderCell>
                  <CTableHeaderCell>Security</CTableHeaderCell>
                  <CTableHeaderCell>Bbq</CTableHeaderCell>
                  <CTableHeaderCell>Wifi</CTableHeaderCell>
                  <CTableHeaderCell>Description</CTableHeaderCell>
                  <CTableHeaderCell>Price</CTableHeaderCell>
                  <CTableHeaderCell>Tenant Email</CTableHeaderCell>
                  <CTableHeaderCell>Mobile</CTableHeaderCell>
                  <CTableHeaderCell>Start Date</CTableHeaderCell>
                  <CTableHeaderCell>End Date</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {this.state.properties.map((property, index) => (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell>
                      <div>{property.id}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.owner_id}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.name}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.location}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.address}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.rooms}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.bathroom}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.hall}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.size}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.ewa}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.furnished}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.pool}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.garden}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.parking}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.cctv}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.security}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.bbq}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.wifi}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.description}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.price}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.tenant_email}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.mobile}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.contract_start}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.contract_end}</div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </div>
      </div>
    )
  }
}
export default VillaList
