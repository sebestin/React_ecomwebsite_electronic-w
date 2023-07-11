import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import admin from "../../assets/Images/admin.svg";
import search from "../../assets/Icons/search.svg";
import LoginTab from "../common/LoginTab/LoginTab";
import "./YourproductNav.css"
const YourproductNav = () => {
 
  return (
<>
<div className="container-fluid">
<Row>
      <div className="mt-5">
        <div className="logosection-cmnav">
          <Col sm={12} md={3} lg={1}>
            <div className="logosection-text">LOGO</div>
          </Col>
    <div className="d-flex">
          <Col lg={8} md={9} sm={12} className="firstsectio-search ">

            <img src={search} className="logosection-srcicon " />
            <input
              type="text"
              placeHolder="Search"
              className="firstsectio-textsrcnews "
            />
           
          
          </Col>
          <LoginTab className="searchbtn">Search</LoginTab>
          </div>

          <Col sm={12} md={6} lg={3}>
              <div className="d-flex ">
                <div className="moneydiv ">
                  <div className="availableheader">Available Amount</div>
                  <h1 className="dolar">$2,300</h1>
                </div>
                
                <div>
                  
                  <img className="firstsectio-imgsc" src={admin} />{" "}
                </div>
                <div>
                  <div className="firstsectio-txt1">Sam Alexander</div>
                  <div className="firstsectio-txt2">Admin</div>
                </div>
              </div>
            </Col>
        </div>
     
        
      </div>  </Row>
      </div>
    </>
  );
};

export default YourproductNav;
