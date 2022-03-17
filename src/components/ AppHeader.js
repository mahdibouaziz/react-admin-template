import React from 'react'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,

  CHeaderToggler,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'

import { logo } from '../assets/brand/logo'
import { CSidebarToggler } from '@coreui/react'


const AppHeader = () => {
 

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        {/* <CHeaderToggler
          className="ps-1"
          onClick={() => {
          //  to toggle the sidebar
          

          }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler> */}
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
      
       
        
      </CContainer>
      <CHeaderDivider />
      
    </CHeader>
  )
}

export default AppHeader
