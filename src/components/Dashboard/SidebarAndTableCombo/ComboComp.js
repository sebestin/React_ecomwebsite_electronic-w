import React from "react";
import { Col } from "react-bootstrap";
import Sidebar from "../../common/Sidebar";
import Table from "../../Dashboard1/soldItem/Table/Table";

const ComboComp = () => {
  return (
    <div >
      <div className="row">
        <Col lg={3}   sm={12} md={12} xl={3} >
          <Sidebar/>
        </Col>
        <Col lg={9}  sm={12} md={12} xl={9}>
          <Table/>
        </Col>
      </div>
    </div>
  );
};

export default ComboComp;
