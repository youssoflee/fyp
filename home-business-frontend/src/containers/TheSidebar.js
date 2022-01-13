import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  // CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CSidebarMinimizer,
} from '@coreui/react'

// import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'
import { getAllowedRoutes, isLoggedIn } from "../services/Utils";

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  let allowedNavs = [];
  if (isLoggedIn()) allowedNavs = getAllowedRoutes(navigation);

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
      <h4>HOME BUSINESS</h4>
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={allowedNavs}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
            CSidebarMinimizer
          }}
        />
      </CSidebarNav>
      {/* <CSidebarMinimizer className="c-d-md-down-none"/> */}
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
