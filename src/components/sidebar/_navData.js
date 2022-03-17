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
    to: '/admin/dashboard',
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
    to: '/admin/users',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Useful Widgets',
    to: '/admin/widgets',
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
    to: '/forms',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form1',
        to: '/admin/forms1',
      },
      {
        component: CNavItem,
        name: 'Form2',
        to: '/admin/forms2',
      },
      {
        component: CNavItem,
        name: 'Form3',
        to: '/admin/forms3',
      },
    
    ],
  },

  {
    component: CNavGroup,
    name: 'Lists',
    to: '/lists',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List1',
        to: '/admin/list1',
      },
      {
        component: CNavItem,
        name: 'List2',
        to: '/admin/list2',
      },
      {
        component: CNavItem,
        name: 'List3',
        to: '/admin/list3',
      },
    
    ],
  },
  
]

export default _nav
