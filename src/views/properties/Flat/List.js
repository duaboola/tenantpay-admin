import React from 'react'
import axios from 'axios'

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
          <div className="table-responsive-md">
            <table className="table table-bordered table-striped">
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
            </table>
          </div>
        </div>
      </div>
    )
  }
}
export default FlatList
