import React from "react";
import "./firstsection.css";
import { Button, Card, Col } from "react-bootstrap";
import admin from "../../../assets/Images/admin.svg";
import search from "../../../assets/Icons/search.svg";
const FirstSection = () => {
  return (
    <div className="mt-5">
      <div className=" logosectioncntap">
        <Col sm={12} md={4} lg={2}  xl={2}>
          <div className="logosection-lgos">LOGO</div>
        </Col>
        <Col sm={12} md={4} lg={5}  xl={8} className="logosec-srcalign">
          <div className="firstsectio-searcnt ">
            <img src={search} className="logosection-srcicon" />
            <input
              type="text"
              placeHolder="Search"
              className="firstsectio-textsrc w-100"
            />
          </div>
        </Col>

        <Col sm={12} md={4} lg={2} xl={2}>
          <div className="cntapp-adflx ">
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
    </div>
  );
};

export default FirstSection;
