import React from 'react'
import axios from 'axios'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardBody,
} from '@coreui/react'

class FlatList extends React.Component {
  state = {
    id: '',
    name: '',
    building: '',
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
  }

  componentDidMount() {
    const url = 'http://192.168.100.96:8888/tenantpay/api/properties/flat/flat.php'
    axios
      .get(url)
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
          <h3>All Properties</h3>
          <CCardBody>
            <CTable align="middle" className="mb-0 border table-striped" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Id</CTableHeaderCell>
                  <CTableHeaderCell>Owner</CTableHeaderCell>
                  <CTableHeaderCell>Flat</CTableHeaderCell>
                  <CTableHeaderCell>Building</CTableHeaderCell>
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
                  <CTableHeaderCell>Wifi</CTableHeaderCell>
                  <CTableHeaderCell>Description</CTableHeaderCell>
                  <CTableHeaderCell>Type</CTableHeaderCell>
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
                      <div>{property.owner_email}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.flat_name}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.building_name}</div>
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
                      <div>{property.bathrooms}</div>
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
                      <div>{property.wifi}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.description}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.type}</div>
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
                      <div>{property.start_date}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.end_date}</div>
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
export default FlatList

/*<table className="table table-bordered table-striped ">
            <thead>
              <tr>
                <th>Id</th>
                <th>Owner</th>
                <th>Flat</th>
                <th>Building</th>
                <th>Location</th>
                <th>Address</th>
                <th>Rooms</th>
                <th>Bathroom</th>
                <th>Hall</th>
                <th>Size</th>
                <th>EWA</th>
                <th>Furnished</th>
                <th>Pool</th>
                <th>Garden</th>
                <th>Parking</th>
                <th>CCTV</th>
                <th>Security</th>
                <th>Wifi</th>
                <th>Description</th>
                <th>Type</th>
                <th>Price</th>
                <th>Tenant Email</th>
                <th>Mobile</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.properties.map((property, index) => (
                <tr key={index}>
                  <td>{property.id}</td>
                  <td>{property.owner_email}</td>
                  <td>{property.flat_name}</td>
                  <td>{property.building_name}</td>
                  <td>{property.location}</td>
                  <td>{property.address}</td>
                  <td>{property.rooms}</td>
                  <td>{property.bathrooms}</td>
                  <td>{property.hall}</td>
                  <td>{property.size}</td>
                  <td>{property.ewa}</td>
                  <td>{property.furnished}</td>
                  <td>{property.pool}</td>
                  <td>{property.garden}</td>
                  <td>{property.parking}</td>
                  <td>{property.cctv}</td>
                  <td>{property.security}</td>
                  <td>{property.wifi}</td>
                  <td>{property.description}</td>
                  <td>{property.type}</td>
                  <td>{property.price}</td>
                  <td>{property.tenant_email}</td>
                  <td>{property.mobile}</td>
                  <td>{property.start_date}</td>
                  <td>{property.end_date}</td>
                </tr>
              ))}
            </tbody>
          </table>*/
