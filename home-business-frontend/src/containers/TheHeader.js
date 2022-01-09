import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  // CHeaderNavItem,
  // CHeaderNavLink,
  // CSubheader,
  CBreadcrumbRouter,
  // CLink,
} from "@coreui/react";
// import CIcon from "@coreui/icons-react";

// routes config
import routes from "../routes";

import {
  TheHeaderDropdown,
  TheHeaderDropdownCart,
  // TheHeaderDropdownNotif,
  // TheHeaderDropdownTasks,
} from "./index";

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const [storedValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem("user");
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item).role : "null";
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return "null";
    }
  });

  // const toggleSidebar = () => {
  //   const val = [true, "responsive"].includes(sidebarShow)
  //     ? false
  //     : "responsive";
  //   dispatch({ type: "set", sidebarShow: val });
  // };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      {/* <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      /> */}
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        {/* <CIcon name="logo" height="48" alt="Logo"/> */}
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
        {/* <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/users">Users</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Settings</CHeaderNavLink>
        </CHeaderNavItem> */}
      </CHeaderNav>

      <CHeaderNav className="px-3">
        {/* <TheHeaderDropdownNotif/> */}
        {/* <TheHeaderDropdownTasks/> */}
        {storedValue === "Customer" ? <TheHeaderDropdownCart /> : ""}
        <TheHeaderDropdown />
      </CHeaderNav>

      {/* <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        />
          <div className="d-md-down-none mfe-2 c-subheader-nav">
            <CLink className="c-subheader-nav-link"href="#">
              <CIcon name="cil-speech" alt="Settings" />
            </CLink>
            <CLink 
              className="c-subheader-nav-link" 
              aria-current="page" 
              to="/dashboard"
            >
              <CIcon name="cil-graph" alt="Dashboard" />&nbsp;Dashboard
            </CLink> 
            <CLink className="c-subheader-nav-link" href="#">
              <CIcon name="cil-settings" alt="Settings" />&nbsp;Settings
            </CLink>
          </div>
      </CSubheader>*/}
    </CHeader>
  );
};

export default TheHeader;
