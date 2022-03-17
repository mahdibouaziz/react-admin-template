import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppHeader from "./ AppHeader";
import Dashbord from "./dashbord/Dashbord";
import AppSidebar from "./sidebar/AppSidebar";
import Users from "./users/Users";
import Widgets from "./widgets/Widgets";


const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
        <div className="body flex-grow-1 px-3">         
          <Routes>
          <Route path="/admin/dashboard" element={ <Dashbord />} />
          <Route path="/admin/users" element={  <Users/>} />
          <Route path="/admin/widgets" element={  <Widgets/>} />
          {/* Redirection to dashbord */}
          <Route path="*" element={<Navigate to="/admin/dashboard" />}/>
        </Routes>
        
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
