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
import MaintenanceFilterList from 'src/components/MaintenanceFilterList'

class MaintenanceList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      prop_name: '',
      location: '',
      progress: '',
      prop_type: '',
      problem: '',
      owner_email: '',
      tenant_email: '',
      properties: [],
    }
  }

  componentDidMount() {
    const url = '/prop/maintenance/admin_list.php'
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
        <MaintenanceFilterList />
        <div className="">
          <h3>Maintenance</h3>
          <CCardBody>
            <CTable align="middle" className="mb-0 border table-striped" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Id</CTableHeaderCell>
                  <CTableHeaderCell>Owner</CTableHeaderCell>
                  <CTableHeaderCell>Property</CTableHeaderCell>
                  <CTableHeaderCell>Location</CTableHeaderCell>
                  <CTableHeaderCell>Problem</CTableHeaderCell>
                  <CTableHeaderCell>Type</CTableHeaderCell>
                  <CTableHeaderCell>Tenant Email</CTableHeaderCell>
                  <CTableHeaderCell>Status</CTableHeaderCell>
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
                      <div>{property.prop_name}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.location}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.problem}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.prop_type}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.tenant_email}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{property.progress}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>
                        <Link
                          to={`/properties/maintenance/details:${property.id}`}
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
export default MaintenanceList
