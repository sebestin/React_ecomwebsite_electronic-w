import React from "react";
import { Button, Col } from "react-bootstrap";
import "./secondsection.css";
import search from "../../../../assets/Icons/search.svg";

const SecondSection = () => {
  return (
    <div className=" mt-5">
      <div className="row"> 
      <div className="newclass justify-content-between align-center">
        {/* <Col sm={12} md={12} lg={3}> */}
        <div className="secondsec-fltr1 {
  col-sm-12 col-md-12 col-lg-3 col-xl-2 ">
          <div className="d-flex justify-content-around w-100  ">
            <div>Filters</div>
            {/* <div> Arrow </div> */}
          </div>
        </div>
        {/* </Col> */}
        {/* <Col sm={12} md={12} lg={9}> */}
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-10 d-flex justify-content-end secondsec-subfltr">
          <div>
            <div className="firstsectio-searchss w-100">
              <img src={search} className="logosection-srciconss" />
              <input
                type="text"
                placeHolder="Search"
                className="firstsectio-textsrcss w-100"
              />
            </div>
          </div>
          <div>
            <Button className="buttonsection-butsbl">Search</Button>
          </div>
        </div>
        {/* </Col> */}
      </div>
      </div>
    </div>
  );
};

export default SecondSection;
