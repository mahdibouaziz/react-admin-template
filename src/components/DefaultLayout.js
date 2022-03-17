import React from "react";
import Dashbord from "./dashbord/Dashbord";
import AppSidebar from "./sidebar/AppSidebar";
import Users from "./users/Users";

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <p></p>
        <div className="body flex-grow-1 px-3">
          {/* <Dashbord /> */}
          <Users/>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
