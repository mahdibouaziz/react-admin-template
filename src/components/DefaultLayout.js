import React from "react";
import Dashbord from "./dashbord/Dashbord";
import AppSidebar from "./sidebar/AppSidebar";

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        {/* <AppHeader /> */}
        <p></p>
        <div className="body flex-grow-1 px-3">
          {/* <AppContent /> */}
          <Dashbord />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
};

export default DefaultLayout;
