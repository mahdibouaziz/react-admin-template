import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  cilPuzzle,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  //Navitem Type - Link with badge
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'success', // colors available: primary - secondary -success - danger - warning - info - light - dark
      text: 'STAT',
    },
  },

  // Navitem Type Title
  {
    component: CNavTitle,
    name: 'Daily Review',
  },

  //Navitem Type - Link without badge
  {
    component: CNavItem,
    name: 'Users',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },

  
  {
    component: CNavTitle,
    name: 'Main Components',
  },

  // Navgroup type - Contains Navlinks
  {
    component: CNavGroup,
    name: 'Forms',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form1',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Form2',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Form3',
        to: '/base/cards',
      },
    
    ],
  },

  {
    component: CNavGroup,
    name: 'Lists',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List1',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'List2',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'List3',
        to: '/base/cards',
      },
    
    ],
  },
  
]

export default _nav
