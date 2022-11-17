import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className="ms-auto">
        <span className="me-1">Owned by</span>
        <a href="https://aurigabh.com/" target="_blank" rel="noopener noreferrer">
          Auriga Ideas and Insights
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
