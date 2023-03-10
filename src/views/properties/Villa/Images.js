import React from 'react'
import { CImage, CCardBody, CCol, CRow } from '@coreui/react'
import API from 'src/api'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function withRouter(Children) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const match = { params: useParams() }
    return <Children {...props} match={match} />
  }
}

class VillaImages extends React.Component {
  state = {
    images: [],
    val: '',
    properties: [],
    // eslint-disable-next-line react/prop-types
    x: '',
  }

  componentDidMount() {
    API({
      method: 'get',
      // eslint-disable-next-line react/prop-types
      url: '/prop/villa/villa_gallery.php?id=' + this.props.match.params.id.slice(1),
    })
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        this.setState({
          images: data,
          // eslint-disable-next-line react/prop-types
          x: this.props.match.params.id.slice(1),
        })
        // if (data[0]['villa_name'] == 'Dummy') {
        //   this.setState({
        //     val: 1,
        //   })
        // }
      })
  }

  deleteImage(id, event) {
    //alert(id)
    event.preventDefault()
    if (window.confirm('Are you sure want to delete?')) {
      API({
        method: 'get',
        url: '/prop/villa/delete_image.php?id=' + id,
      })
        .then(function (response) {
          //handle success
          console.log(response)
          if (response.status === 200) {
            alert('Image deleted successfully')
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
          <h3>Villa Gallery</h3>
          <p>
            <Link
              // eslint-disable-next-line no-template-curly-in-string
              to={`/properties/villa/images/add:${this.state.x}`}
              className="btn btn-primary btn-xs"
            >
              Add Images
            </Link>
          </p>
          <CCardBody>
            <CRow>
              {this.state.images.map((img, index) => (
                <CCol v-for="item in tableItems" key={index}>
                  <CImage
                    rounded
                    thumbnail
                    src={`http://192.168.100.96:8888/tenantpay/prop/villa/gallery/${img.image}`}
                    width={200}
                    height={200}
                  />
                  <p>
                    {img.villa_name},{img.building_name}
                  </p>
                  <Link
                    to="#"
                    onClick={this.deleteImage.bind(this, img.id)}
                    className="btn btn-danger btn-xs"
                  >
                    Delete
                  </Link>
                  <br></br>
                </CCol>
              ))}
            </CRow>
          </CCardBody>
        </div>
      </div>
    )
  }
}
export default withRouter(VillaImages)
