import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import "./tablesection.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import DatePicker from "react-datepicker";
import calendar from "./Calendar.svg";
const TableSection = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <Col sm={12} md={12} lg={12} xl={12}>
        <div className=" dashsammains">
          <div>
            <h1 className="samh1"> Hey,Sam !</h1>
          </div>
          <div className="sam-subtxt">
            Welcome back, nice to see you again !
          </div>
        </div>
      </Col>

      <div className="dash-div">
        <div className="alltimerevinedivdash mt-4 txt-center">
          <div className="revenueeheader">All time revenue</div>
          <div className=" revnums">
            {/* <div className=" d-flex align-items-center"> */}

            <div className="dolar ">$10,000 </div>
            <div className="arrowicon">
              <AiOutlineArrowUp className="mb-1" />
              12%{" "}
            </div>
          </div>
        </div>
        <div className="monthlyrevenuedivdash mt-4 ">
          <div className="Monthlyheader">Monthly revenue</div>
          <div className=" datesel-section ">
            <div className='dollarflexi'>
              <h1 className="dolar">$2,000 </h1>
              <div className=" d-flex arrowdownicon">
                <AiOutlineArrowDown className="mb-1 " />
                8%
              </div>
            </div>
            <div>
              <div className="datediv d-flex">
                <DatePicker
                  className="datepickerdiv"
                  placeholderText="select Month"
                  // onChange={(date) => setStartDate(date)}
                />
                <img className='dash-calend' onChange={(date) => setStartDate(date)} src={calendar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSection;
