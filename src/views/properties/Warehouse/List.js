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

class WarehouseList extends React.Component {
  state = {
    id: '',
    name: '',
    location: '',
    address: '',
    rooms: '',
    size: '',
    ewa: '',
    furnished: '',
    security: '',
    cctv: '',
    parking: '',
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
    const url = 'http://192.168.100.96:8888/tenantpay/api/properties/warehouse/warehouse.php'
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
          <h3>Warehouse</h3>
          <CCardBody>
            <CTable align="middle" className="mb-0 border table-striped" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Id</CTableHeaderCell>
                  <CTableHeaderCell>Owner</CTableHeaderCell>
                  <CTableHeaderCell>Warehouse</CTableHeaderCell>
                  <CTableHeaderCell>Location</CTableHeaderCell>
                  <CTableHeaderCell>Address</CTableHeaderCell>
                  <CTableHeaderCell>Rooms</CTableHeaderCell>
                  <CTableHeaderCell>Size</CTableHeaderCell>
                  <CTableHeaderCell>EWA</CTableHeaderCell>
                  <CTableHeaderCell>Furnished</CTableHeaderCell>
                  <CTableHeaderCell>Parking</CTableHeaderCell>
                  <CTableHeaderCell>Security</CTableHeaderCell>
                  <CTableHeaderCell>CCTV</CTableHeaderCell>
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
                      <div>{property.owner_email}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.warehouse_name}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.location}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.address}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.room}</div>
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
                      <div>{property.parking}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.security}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.cctv}</div>
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
export default WarehouseList
