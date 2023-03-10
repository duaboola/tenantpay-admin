import React from 'react'
import API from 'src/api'

class AllList extends React.Component {
  state = {
    id: '',
    name: '',
    location: '',
    type: '',
    rent: '',
    owner_email: '',
    tenant_email: '',
    tenant_name: '',
    cpr: '',
    mobile: '',
    start_date: '',
    end_date: '',
    properties: [],
  }

  componentDidMount() {
    const url = '/prop/all/admin_list.php'
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

        <div className="col-md-8">
          <h3>All Properties</h3>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Location</th>
                <th>Type</th>
                <th>Rent</th>
                <th>Owner</th>
                <th>Tenant Email</th>
                <th>Tenant Name</th>
                <th>CPR</th>
                <th>Mobile</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.properties.map((property, index) => (
                <tr key={index}>
                  <td>{property.id}</td>
                  <td>{property.name}</td>
                  <td>{property.location}</td>
                  <td>{property.type}</td>
                  <td>{property.rent}</td>
                  <td>{property.owner_email}</td>
                  <td>{property.tenant_email}</td>
                  <td>{property.tenant_name}</td>
                  <td>{property.cpr}</td>
                  <td>{property.mobile}</td>
                  <td>{property.start_date}</td>
                  <td>{property.end_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default AllList
