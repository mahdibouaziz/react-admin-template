import React from "react";

import {
  CButton,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
} from "@coreui/react";
import "./navbar.css"

import { AppSidebarNav } from "./AppSidebarNav";


import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import navigation from "./_navData";


const AppSidebar = () => {
  return (
    <CSidebar id="adminSidebar" position="fixed">
      <CSidebarBrand className="d-none d-md-flex company-admin-logo" to="/">
        <p>Company Logo</p>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarBrand className="d-none d-md-flex company-admin-logo">
      <CButton color="link" className="logout-admin-button" >Logout</CButton>
      </CSidebarBrand>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
