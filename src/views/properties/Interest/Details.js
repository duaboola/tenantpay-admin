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

class InterestDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      location: '',
      status: '',
      type: '',
      price: '',
      owner_email: '',
      tenant_email: '',
      tenant_name: '',
      tenant_cpr: '',
      tenant_mobile: '',
      no: '',
      relation: '',
      date: '',
      properties: [],
      red: false,
    }
    this.deleteInterest = this.deleteInterest.bind(this)
    this.acceptInterest = this.acceptInterest.bind(this)
    this.rejectInterest = this.rejectInterest.bind(this)
  }

  componentDidMount() {
    API({
      method: 'get',
      // eslint-disable-next-line react/prop-types
      url: '/prop/interest/interest_details.php?id=' + this.props.match.params.id.slice(1),
    })
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        this.setState({
          id: data[0]['id'],
          owner_email: data[0]['owner_email'],
          name: data[0]['prop_name'],
          location: data[0]['location'],
          price: data[0]['rent'],
          type: data[0]['type'],
          tenant_email: data[0]['tenant_email'],
          tenant_name: data[0]['tenant_name'],
          tenant_cpr: data[0]['tenant_cpr'],
          tenant_mobile: data[0]['tenant_mobile'],
          no: data[0]['no_of_tenants'],
          relation: data[0]['relation'],
          date: data[0]['required_date'],
          status: data[0]['status'],
        })
      })
  }

  deleteInterest(id, event) {
    //alert(id)
    event.preventDefault()
    if (window.confirm('Are you sure want to delete?')) {
      API({
        method: 'get',
        url: '/prop/interest/admin_delete.php?id=' + id,
      })
        .then(function (response) {
          //handle success
          console.log(response)
          if (response.status === 200) {
            alert('Interest deleted successfully')
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

  acceptInterest(id, event) {
    //alert(id)
    event.preventDefault()
    if (window.confirm('Are you sure want to accept this request?')) {
      API({
        method: 'get',
        url: '/prop/interest/accept.php?id=' + id,
      })
        .then(function (response) {
          //handle success
          console.log(response)
          if (response.status === 200) {
            alert('Interest accepted successfully')
            window.location.reload(false)
          }
        })
        .catch(function (response) {
          //handle error
          console.log(response)
        })
    }
  }

  rejectInterest(id, event) {
    //alert(id)
    event.preventDefault()
    if (window.confirm('Are you sure want to reject this request?')) {
      API({
        method: 'get',
        url: '/prop/interest/reject.php?id=' + id,
      })
        .then(function (response) {
          //handle success
          console.log(response)
          if (response.status === 200) {
            alert('Interest rejected successfully')
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
    if (this.state.red) {
      return <Navigate to="/properties/interest/list" />
    }
    const s = this.state.status
    return (
      <div className="container">
        <h1 className="page-header text-center">Property Management</h1>

        <div className="">
          <h3>Interest Details</h3>
          <CContainer>
            <CRow className="align-items-start">
              {/*<CCol>
                 <p>
                  <Link
                    to={`/properties/interest/images:${this.state.id}`}
                    className="btn btn-primary btn-xs"
                  >
                    View Images
                  </Link>
                </p>
              </CCol>
              <CCol>
                <p>
                  <Link
                    to={`/properties/interest/edit:${this.state.id}`}
                    className="btn btn-secondary btn-xs"
                  >
                    Edit Details
                  </Link>
                </p>
              </CCol> */}
              <CCol>
                <p>
                  <Link
                    to="#"
                    onClick={this.deleteInterest.bind(this, this.state.id)}
                    className="btn btn-danger btn-xs"
                  >
                    Delete Interest
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
                    <div>Property</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.name}</div>
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
                    <div>{this.state.type}</div>
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
                    <div>Tenant Name</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.tenant_name}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Tenant CPR</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.tenant_cpr}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Tenant Mobile</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.tenant_mobile}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>No of Tenants</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.no}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Relation</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.relation}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Start Date</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{this.state.date}</div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <div>Status</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    {s == null ? (
                      <CRow className="align-items-start">
                        <CCol>
                          <p>
                            <Link
                              to="#"
                              onClick={this.acceptInterest.bind(this, this.state.id)}
                              className="btn btn-success btn-xs"
                            >
                              Accept
                            </Link>
                          </p>
                        </CCol>
                        <CCol>
                          <p>
                            <Link
                              to="#"
                              onClick={this.rejectInterest.bind(this, this.state.id)}
                              className="btn btn-danger btn-xs"
                            >
                              Reject
                            </Link>
                          </p>
                        </CCol>
                      </CRow>
                    ) : (
                      <div>{this.state.status}</div>
                    )}
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
export default withRouter(InterestDetails)
