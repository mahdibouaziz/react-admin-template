import React from "react";
import AppSidebar from "./sidebar/AppSidebar";

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        {/* <AppHeader /> */}
        <p>Test258</p>
        <div className="body flex-grow-1 px-3">
          {/* <AppContent /> */}
          <p>Test999</p>
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
};

export default DefaultLayout;
