import React from 'react'
import { CButton } from '@coreui/react'
import { Link } from 'react-router-dom'

const Office = () => {
  return (
    <table className="table w-100">
      <tbody>
        <tr>
          <td className="text-medium-emphasis">
            <CButton color="secondary" className="px-4">
              <Link to="/properties/office/list" style={{ textDecoration: 'none' }}>
                List
              </Link>
            </CButton>
          </td>
          <td className="text-medium-emphasis">
            <CButton color="secondary" className="px-4">
              <Link to="/properties/office/create" style={{ textDecoration: 'none' }}>
                Create
              </Link>
            </CButton>
          </td>
        </tr>
        <tr>
          <td className="text-medium-emphasis">
            <CButton color="primary" className="px-4">
              Edit
            </CButton>
          </td>
          <td className="text-medium-emphasis">
            <CButton color="primary" className="px-4">
              Delete
            </CButton>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Office
