import React from "react";
import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <div>
      dashboard
      <Outlet />
    </div>
  );
};

export default DashBoardLayout;
