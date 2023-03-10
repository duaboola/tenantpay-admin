import React, { Component } from 'react'
import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CRow } from '@coreui/react'
import API from 'src/api'
import { useParams } from 'react-router-dom'

export function withRouter(Children) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const match = { params: useParams() }
    return <Children {...props} match={match} />
  }
}

class AddWarehouseImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      selectedFile: '',
      resposeArray: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files,
      resposeArray: [],
    })
  }

  handleFormSubmit(event) {
    event.preventDefault()

    let formData = new FormData()
    // eslint-disable-next-line react/prop-types
    formData.append('id', this.props.match.params.id.slice(1))
    for (let i = 0; i < this.state.selectedFile.length; i++) {
      formData.append('file[]', this.state.selectedFile[i])
    }

    // const url = '/prop/warehouse/add_warehouse_image.php'
    API({
      method: 'post',
      url: '/prop/warehouse/add_warehouse_image.php',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then(function (response) {
        //handle success
        console.log(response)
        alert('New Image Successfully Added.')
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
  }

  render() {
    return (
      <div className="bg-light d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Add Images</h1>
                    <p className="text-medium-emphasis">Select Files</p>
                    <div className="form-group p-5">
                      <input type="file" name="file" multiple onChange={this.handleInputChange} />
                    </div>
                    <div className="d-grid">
                      <CButton color="success" onClick={(e) => this.handleFormSubmit(e)}>
                        Upload Images
                      </CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
}
export default withRouter(AddWarehouseImage)
