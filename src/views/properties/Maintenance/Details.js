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

class MaintenanceDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      prop_name: '',
      location: '',
      progress: '',
      prop_type: '',
      problem: '',
      description: '',
      owner_email: '',
      tenant_email: '',
      priority: '',
      properties: [],
      red: false,
    }
    this.deleteMaintenance = this.deleteMaintenance.bind(this)
    this.newMaintenance = this.newMaintenance.bind(this)
    this.progressMaintenance = this.progressMaintenance.bind(this)
    this.completedMaintenance = this.completedMaintenance.bind(this)
  }

  componentDidMount() {
    API({
      method: 'get',
      // eslint-disable-next-line react/prop-types
      url: '/prop/maintenance/maintenance_details.php?id=' + this.props.match.params.id.slice(1),
    })
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        this.setState({
          id: data[0]['id'],
          owner_email: data[0]['owner_email'],
          prop_name: data[0]['prop_name'],
          location: data[0]['location'],
          problem: data[0]['problem'],
          prop_type: data[0]['prop_type'],
          tenant_email: data[0]['tenant_email'],
          description: data[0]['description'],
          progress: data[0]['progress'],
          priority: data[0]['priority'],
        })
      })
  }

  deleteMaintenance(id, event) {
    //alert(id)
    event.preventDefault()
    if (window.confirm('Are you sure want to delete?')) {
      API({
        method: 'get',
        url: '/prop/maintenance/admin_delete.php?id=' + id,
      })
        .then(function (response) {
          //handle success
          console.log(response)
          if (response.status === 200) {
            alert('Maintenance deleted successfully')
          }
        })
        .catch(function (response) {
          //handle error
          console.log(response)
        })
    }
  }

  newMaintenance(id, event) {
    //alert(id)
    event.preventDefault()
    if (window.confirm('Are you sure want to change status to new?')) {
      API({
        method: 'get',
        url: '/prop/maintenance/new.php?id=' + id,
      })
        .then(function (response) {
          //handle success
          console.log(response)
          if (response.status === 200) {
            alert('Maintenance status updated successfully')
            window.location.reload(false)
          }
        })
        .catch(function (response) {
          //handle error
          console.log(response)
        })
    }
  }

  progressMaintenance(id, event) {
    //alert(id)
    event.preventDefault()
    if (window.confirm('Are you sure want to change status to in progress?')) {
      API({
        method: 'get',
        url: '/prop/maintenance/progress.php?id=' + id,
      })
        .then(function (response) {
          //handle success
          console.log(response)
          if (response.status === 200) {
            alert('Maintenance status updated successfully')
            window.location.reload(false)
          }
        })
        .catch(function (response) {
          //handle error
          console.log(response)
        })
    }
  }

  completedMaintenance(id, event) {
    //alert(id)
    event.preventDefault()
    if (window.confirm('Are you sure want to change status to completed?')) {
      API({
        method: 'get',
        url: '/prop/maintenance/completed.php?id=' + id,
      })
        .then(function (response) {
          //handle success
          console.log(response)
          if (response.status === 200) {
            alert('Maintenance status updated successfully')
            window.location.reload(false)
          }
        })
        .catch(function (response) {
          //handle error
          console.log(response)
        })
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="page-header text-center">Property Management</h1>

        <div className="">
          <h3>Maintenance Details</h3>
          <CContainer>
            <CRow className="align-items-start">
              <CCol>
                <p>
                  <Link
                    to="#"
                    onClick={this.newMaintenance.bind(this, this.state.id)}
                    className="btn btn-primary btn-xs"
                  >
                    Change Status to New
                  </Link>
                </p>
              </CCol>
              <CCol>
                <p>
                  <Link
                    to="#"
                    onClick={this.progressMaintenance.bind(this, this.state.id)}
                    className="btn btn-success btn-xs"
                  >
                    Change Status to In Progress
                  </Link>
                </p>
              </CCol>
              <CCol>
                <p>
                  <Link
                    to="#"
                    onClick={this.completedMaintenance.bind(this, this.state.id)}
                    className="btn btn-secondary btn-xs"
                  >
                    Change Status to Completed
                  </Link>
                </p>
              </CCol>
              <CCol>
                <p>
                  <Link
                    to="#"
                    onClick={this.deleteMaintenance.bind(this, this.state.id)}
                    className="btn btn-danger btn-xs"
                  >
                    Delete Maintenance
                  </Link>
                </p>
              </CCol>
            </CRow>
          </CContainer>

          <CCardBody>
            <CTable align="middle" className="mb-0 border table-striped" hover responsive>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell>Request</CTableHeaderCell>
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
                    <div>Tenant Email</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.tenant_email}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Property</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.prop_name}</div>
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
                    <div>Type</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.prop_type}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Problem</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.problem}</div>
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
                    <div>Priority</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.priority}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Status</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.progress}</div>
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
export default withRouter(MaintenanceDetails)
