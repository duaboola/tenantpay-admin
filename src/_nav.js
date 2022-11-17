import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  // cilBell,
  // cilCalculator,
  // cilChartPie,
  // cilCursor,
  // cilDescription,
  //cilDrop,
  cilNotes,
  //cilPencil,
  cilPuzzle,
  cilSpeedometer,
  //cilStar,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavTitle,
    name: 'Properties',
  },
  {
    component: CNavItem,
    name: 'All',
    to: '/properties/all',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Flat',
    to: '/properties/flat',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Villa',
    to: '/properties/villa',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Office',
    to: '/properties/office',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Shop',
    to: '/properties/shop',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Warehouse',
    to: '/properties/warehouse',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'User',
  },
  // {
  //   component: CNavGroup,
  //   name: 'List Users',
  //   to: '/base',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   // items: [
  //   //   {
  //   //     component: CNavItem,
  //   //     name: 'Accordion',
  //   //     to: '/base/accordion',
  //   //   },
  //   //   {
  //   //     component: CNavItem,
  //   //     name: 'Breadcrumb',
  //   //     to: '/base/breadcrumbs',
  //   //   },
  //   //   {
  //   //     component: CNavItem,
  //   //     name: 'Cards',
  //   //     to: '/base/cards',
  //   //   },
  //   //   {
  //   //     component: CNavItem,
  //   //     name: 'Carousel',
  //   //     to: '/base/carousels',
  //   //   },
  //   //   {
  //   //     component: CNavItem,
  //   //     name: 'Collapse',
  //   //     to: '/base/collapses',
  //   //   },
  //   //   {
  //   //     component: CNavItem,
  //   //     name: 'List group',
  //   //     to: '/base/list-groups',
  //   //   },
  //   //   {
  //   //     component: CNavItem,
  //   //     name: 'Navs & Tabs',
  //   //     to: '/base/navs',
  //   //   },
  //   //   {
  //   //     component: CNavItem,
  //   //     name: 'Pagination',
  //   //     to: '/base/paginations',
  //   //   },
  //   //   {
  //   //     component: CNavItem,
  //   //     name: 'Placeholders',
  //   //     to: '/base/placeholders',
  //   //   },
  //   //   {
  //   //     component: CNavItem,
  //   //     name: 'Popovers',
  //   //     to: '/base/popovers',
  //   //   },
  //   //   {
  //   //     component: CNavItem,
  //   //     name: 'Progress',
  //   //     to: '/base/progress',
  //   //   },
  //   //   {
  //   //     component: CNavItem,
  //   //     name: 'Spinners',
  //   //     to: '/base/spinners',
  //   //   },
  //   //   {
  //   //     component: CNavItem,
  //   //     name: 'Tables',
  //   //     to: '/base/tables',
  //   //   },
  //   //   {
  //   //     component: CNavItem,
  //   //     name: 'Tooltips',
  //   //     to: '/base/tooltips',
  //   //   },
  //   //],
  // },
  {
    component: CNavItem,
    name: 'List Users',
    to: '/buttons',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Create User',
    to: '/user/create',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Edit User',
    to: '/buttons',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Delete User',
    to: '/charts',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
]

export default _nav
