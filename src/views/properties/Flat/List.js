import React from 'react'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardBody,
} from '@coreui/react'
import API from 'src/api'
import { Link } from 'react-router-dom'
import FilterList from 'src/components/FilterList'

class FlatList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
      searchInput: '',
      properties: [],
    }
  }

  componentDidMount() {
    const url = '/prop/flat/admin_list.php'
    API.get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ properties: data })
        console.log(this.state.properties)
      })
  }

  componentWillUnmount() {
    const url = '/prop/flat/admin_list.php'
    API.get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ properties: data })
        console.log(this.state.properties)
      })
  }

  handleChange = (event) => {
    const { value } = event.target
    this.setState({ value })
  }

  render() {
    return (
      <div className="container">
        <h1 className="page-header text-center">Property Management</h1>

        <div className="">
          <h3>Flat</h3>
          <CCardBody>
            <FilterList />
            <CTable align="middle" className="mb-0 border table-striped" hover responsive>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell>Id</CTableHeaderCell>
                  <CTableHeaderCell>Owner</CTableHeaderCell>
                  <CTableHeaderCell>Flat</CTableHeaderCell>
                  <CTableHeaderCell>Building</CTableHeaderCell>
                  <CTableHeaderCell>Location</CTableHeaderCell>
                  <CTableHeaderCell>Address</CTableHeaderCell>
                  <CTableHeaderCell>Type</CTableHeaderCell>
                  <CTableHeaderCell>Price</CTableHeaderCell>
                  <CTableHeaderCell>Tenant Email</CTableHeaderCell>
                  <CTableHeaderCell>Mobile</CTableHeaderCell>
                  <CTableHeaderCell>Action</CTableHeaderCell>
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
                      <div>
                        <Link
                          to={`/properties/flat/details:${property.id}`}
                          className="btn btn-dark btn-xs"
                        >
                          Details
                        </Link>
                      </div>
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
