import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Yourproductsidebar.css";
import Home from "../../assets/Images/Home.png";
import Billing from "../../assets/Images/billing.svg";
import Profile from "../../assets/Images/profile.svg";
import settings from "../../assets/Images/setting.svg";
import Listing from "../../assets/Images/listing.svg";
import whithome from "../../assets/Images/whithome.svg";
import whitelisting from "../../assets/Images/whitelisting.svg";
import whitelogout from "../../assets/Images/whitelogout.svg";
import whitesetting from "../../assets/Images/whitesetting.svg";
import logout from "../../assets/Images/logout.svg";
import { Button, Card, Col, Row } from "react-bootstrap";
const Yourproductsidebar = () => {
  const [isSelected1, setIsSelected1] = useState("Home");
  const newsselection1 = (text) => {
    console.log(text);
    setIsSelected1(text);
    // console.log('-----------------'+text)
  };
  return (
    <div>
      <Col lg={2} sm={12} md={2}>
        <div className="sidebardiv1 ">
          <div className="mt-5">
            <Link
              className={
                isSelected1 === "Home" ? "label-div1 active" : "label-div1"
              }
              onClick={() => newsselection1("Home")}
              to=""
              title="Home"
              style={{ textDecoration: "none" }}
            >
              <div className=" d-flex  mb-3">
               {isSelected1 === "Home" ? <img className="lablediv1" src={whithome}/> : <img className="lablediv1" src={Home} />} 

                <label  className={
                    isSelected1 === "Home"
                      ? "labletext1_active"
                      : "labletext1"
                  }>Home</label>
              </div>
            </Link>


            <Link
              className={
                isSelected1 === "Listings" ? "label-div1  active" : "label-div1"
              }
              onClick={() => newsselection1("Listings")}
              to=""
              title="Listings"
              style={{ textDecoration: "none" }}
            >
              <div className="d-flex mb-3">
                {/* <img className="lablediv1" src={Billing} /> */}
                {isSelected1 === "Listings" ? <img className="lablediv1 " style={{height:'26px',paddingTop:'4px'}}src={whitelisting}/> : <img className="lablediv1" src={Billing} />} 


                <label  className={
                    isSelected1 === "Listings"
                      ? "labletext1_active"
                      : "labletext1"
                  }>Listings</label>
              </div>
            </Link>

            <Link
              className={
                isSelected1 === "Lorem" ? "label-div1 active" : "label-div1"
              }
              onClick={() => newsselection1("Lorem")}
              to=""
              title="Lorem"
              style={{ textDecoration: "none" }}
            >
              <div className="d-flex mb-3">
                
                {isSelected1 === "Lorem" ? <img className="lablediv1" src={whithome}/> : <img className="lablediv1" src={Home} />} 
                <label  className={
                    isSelected1 === "Lorem"
                      ? "labletext1_active"
                      : "labletext1"
                  }>Lorem</label>
              </div>
            </Link>
            <Link
              className={
                isSelected1 === "Lorem1" ? "label-div1 active" : "label-div1"
              }
              onClick={() => newsselection1("Lorem1")}
              to=""
              title="Lorem"
              style={{ textDecoration: "none" }}
            >
              <div className="d-flex mb-3">
          
                {isSelected1 === "Lorem1" ? <img className="lablediv1" src={whithome}/> : <img className="lablediv1" src={Home} />} 

                <label
                  className={
                    isSelected1 === "Lorem1"
                      ? "labletext1_active"
                      : "labletext1"
                  }
                >
                  Lorem
                </label>
              </div>
            </Link>
          </div>
        </div>
        <div className="sidebardivlogout1 ">
          <div className=" sidebarlogout-subcomp mt-5">
            <Link
              className={
                isSelected1 === "Settings" ? "label-div1 active" : "label-div1"
              }
              onClick={() => newsselection1("Settings")}
              to=""
              title="Settings"
              style={{ textDecoration: "none" }}
            >
              <div className="d-flex mb-3">
                {isSelected1 === "Settings" ? <img className="lablediv1" style={{height:'26px',paddingTop:'4px'}}src={whitesetting}/> : <img className="lablediv1" src={settings} />} 

                <label   className={
                    isSelected1 === "Settings"
                      ? "labletext1_active"
                      : "labletext1"
                  }>Settings</label>
              </div>
            </Link>
            <Link
              className={
                isSelected1 === "Logout" ? "label-div1 active" : "label-div1"
              }
              onClick={() => newsselection1("Logout")}
              to=""
              title="Logout"
              style={{ textDecoration: "none" }}
            >
              <div className="d-flex mb-3">
              {isSelected1 === "Logout" ? <img className="lablediv1" style={{height:'26px',paddingTop:'4px'}}src={whitelogout}/> : <img className="lablediv1" src={logout} />} 
      

                <label  className={
                    isSelected1 === "Logout"
                      ? "labletext1_active"
                      : "labletext1"
                  }>Logout</label>
              </div>
            </Link>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Yourproductsidebar;
