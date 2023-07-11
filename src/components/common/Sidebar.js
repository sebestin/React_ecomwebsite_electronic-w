import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import Home from "./Images/Home.png";
import Billing from "./Images/billing.svg";
import Profile from "./Images/profile.svg";
import settings from "./Images/setting.svg";
import Listing from "./Images/listing.svg";
import logout from "./Images/logout.svg";
import whitelisting from "./Images/whitelisting.svg";
import whitebilling from "./Images/whitebilling.svg";
import whiteprofile from "./Images/whiteprofile.svg";
import whitesetting from "./Images/whitesetting.svg";
import whitelogout from "./Images/whitelogout.svg"
import whithome from "./Images/whithome.svg"
import { Button, Card, Col, Row } from "react-bootstrap";
const Sidebar = () => {
  const [isSelected, setIsSelected] = useState("");
  const newsselection = (text) => {
    console.log(text);
    setIsSelected(text);
  };
  return (
    <div className='sidebarmainss-divd'>
      <Col lg={2} sm={12} md={12} xl={2}>
        <div className="sidebardiv ">
        <div className="mt-5">
          <Link
            className={isSelected === "Home" ? "label-div active" : "label-div"}
            onClick={() => newsselection("Home")}
            to=""
            title="Home"
            style={{ textDecoration: "none" }}
          >
            <div className=" d-flex  mb-3 ">
            {isSelected === "Home" ? <img className="lablediv" src={whithome}/> : <img className="lablediv" src={Home} />} 


            <label  className={
                    isSelected === "Home"
                      ? "labletext_active"
                      : "labletext"
                  }>Home</label>
            </div>
          </Link>
          <Link
            className={
              isSelected === "Listings" ? "label-div active" : "label-div"
            }
            onClick={() => newsselection("Listings")}
            to=""
            title="Listings"
            style={{ textDecoration: "none" }}
          >
            <div className="d-flex mb-2">
        
              {isSelected === "Listings" ? <img className="lablediv " style={{height:'26px',paddingTop:'4px'}}src={whitelisting}/> : <img className="lablediv" src={Listing} />} 
           
              <label  className={
                    isSelected === "Listings"
                      ? "labletext_active"
                      : "labletext"
                  }>Listings</label>
            </div>
          </Link>

          <Link
            className={
              isSelected === "Profile" ? "label-div active" : "label-div"
            }
            onClick={() => newsselection("Profile")}
            to=""
            title="Profile"
            style={{ textDecoration: "none" }}
          >
            <div className="d-flex mb-2">
              {isSelected === "Profile" ? <img className="lablediv " style={{height:'26px',paddingTop:'4px'}}src={whiteprofile}/> : <img className="lablediv" src={Profile} />} 

       
              <label  className={
                    isSelected === "Profile"
                      ? "labletext_active"
                      : "labletext"
                  }>Profile</label>
            </div>
          </Link>
          <Link
            className={
              isSelected === "Billings" ? "label-div active" : "label-div"
            }
            onClick={() => newsselection("Billings")}
            to=""
            title="Billings"
            style={{ textDecoration: "none" }}
          >
            <div className="d-flex mb-2">
     
              {isSelected === "Billings" ? <img className="lablediv " style={{height:'26px',paddingTop:'4px'}}src={whitebilling}/> : <img className="lablediv" src={Billing} />} 
          
              <label  className={
                    isSelected === "Billings"
                      ? "labletext_active"
                      : "labletext"
                  }>Billings</label>
            </div>
          </Link>
        </div>
        </div>
        <div>
          <div className="sidebardivlogoutdsh ">
            <div className=" sidebarlogout-subcomp mt-5">
              <Link
                className={
                  isSelected === "settings" ? "label-div active" : "label-div"
                }
                onClick={() => newsselection("settings")}
                to=""
                title="settings"
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex mb-2">
    
                  {isSelected === "settings" ? <img className="lablediv " style={{height:'26px',paddingTop:'4px'}}src={whitesetting}/> : <img className="lablediv" src={settings} />} 
                  <label  className={
                    isSelected === "settings"
                      ? "labletext_active"
                      : "labletext"
                  }>settings</label>
                </div>
              </Link>
              <Link
                className={
                  isSelected === "Logout" ? "label-div active" : "label-div"
                }
                onClick={() => newsselection("Logout")}
                to=""
                title="Logout"
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex mb-2">
                  {isSelected === "Logout" ? <img className="lablediv " style={{height:'26px',paddingTop:'4px'}}src={whitelogout}/> : <img className="lablediv" src={logout} />} 
                  <label  className={
                    isSelected === "Logout"
                      ? "labletext_active"
                      : "labletext"
                  }>Logout</label>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Sidebar;
