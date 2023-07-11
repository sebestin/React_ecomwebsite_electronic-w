import React from "react";
import "./DashboardNav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import admin from "../../assets/Images/admin.svg";
import search from "../../assets/Icons/search.svg";
import LoginTab from "../common/LoginTab/LoginTab";
import Home from "./Home.png";
import Listing from "./listing.svg";
import Billing from "./billing.svg";
import Profile from "./profile.svg";
import logout from "./logout.svg";
import settings from "./setting.svg";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import {CgProfile} from 'react-icons/cg';
// import {RiBillFill} from 'react-icons/ri';
const DashboardNav = () => {
  // const [date, setDate] = useState(new Date());
  const [isSelected, setIsSelected] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const newsselection = (text) => {
    console.log(text);
    setIsSelected(text);
  };

  return (
    <>
      <div className="">
        <Row>
          <div className="mt-5">
            <div className="logosection-cmnavdsh">
              <Col sm={12} md={3} lg={1}>
                <div className="logosection-text">LOGO</div>
              </Col>
              <div className="d-flex align-items-center">
                <Col lg={8} md={9} sm={12} className="firstsectio-searchdash ">
                  <img src={search} className="logosection-srcicon " />
                  <input
                    type="text"
                    placeHolder="Search"
                    className="firstsectio-textsrcnew "
                  />
                </Col>
                <LoginTab className="searchbtn">search</LoginTab>
              </div>

              <Col sm={12} md={4} lg={3}>
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
          </div>{" "}
        </Row>
      </div>
    </>
  );
};

export default DashboardNav;
