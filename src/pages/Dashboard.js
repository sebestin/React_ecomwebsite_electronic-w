import React from "react";
import Table from "../components/Dashboard1/soldItem/Table/Table";
import DashboardNav from "../components/Dashboard/DashboardNav";
import Sidebar from "../components/common/Sidebar";
import { Col } from "react-bootstrap";
import ComboComp from "../components/Dashboard/SidebarAndTableCombo/ComboComp";

const Dashboard = () => {
  return (
    <>
      <DashboardNav />
      <ComboComp />
    </>
  );
};

export default Dashboard;
