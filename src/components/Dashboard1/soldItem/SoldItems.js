import React from "react";
import { Button, Card, Col, Row, Container } from "react-bootstrap";
import "./SoldItem.css";

const SoldItems = () => {
  return (
    <>
      <div className='col-xl-10 col-lg-12 col-sm-10 col-md-10'>
        <h6 className="table-title mt-3 mb-3">Sold items</h6>
        <Row className="table-heading">
          <Col  md={3} lg={3} xl={3}  className='item-text'>Item</Col>
          <Col md={1} lg={1} xl={1}>Price</Col>
          <Col md={1} lg={1} xl={1}>Sold</Col>
          <Col md={1} lg={1} xl={1}>Available</Col>
          <Col md={1} lg={2} xl={2}>Revenue</Col>
          <Col md={3} lg={2} xl={2}>Info</Col>
          <Col md={2} lg={2} xl={2} className='item-datesold'>Date Sold</Col>
        </Row>
      </div>
      {/* <div>
        <h6 className="table-title mt-3">Sold items</h6>
        <div className="table-heading">
          <div className='col-lg-3'>1</div>
          <div className='col-lg-1'>2</div>
          <div className='col-lg-1'>3</div>
          <div className='col-lg-1'>4</div>

          <div className='col-lg-1'>5</div>

          <div className='col-lg-2'>6</div>

          <div className='col-lg-3'>7</div>
        </div>
      </div> */}
    </>
  );
};

export default SoldItems;
