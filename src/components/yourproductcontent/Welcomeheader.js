import React from "react";
import "./welcomeheader.css";
import { HiOutlinePlusSm } from "react-icons/hi";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
const Welcomeheader = () => {
  return (
    <div className="container">
      <Row>
        <Col md={10}  lg={10} sm={12}>
          <div className="container samtextdiv2">
            <div>
              <h1 className="samh2"> Hey, Sam!</h1>
            </div>
            <div className="welcometext">Welcome back, nice to see you again !</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={10} lg={10} sm={12}>
          <div>
            <h1 className="listtext mt-10">All Listings</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={10} lg={10} sm={12}>
          <div className="addmoretext d-flex ">
            <div>
              <HiOutlinePlusSm />
            </div>ADD MORE
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Welcomeheader;
