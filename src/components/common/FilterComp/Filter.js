import React from "react";
import { Form } from "react-bootstrap";
import searchlft from "../../../assets/Icons/searchlft.svg";

import "./filter.css";
import RatingComp from "./RatingComp/RatingComp";
import SupplierComp from "./SupplierComp/SupplierComp";

const Filter = () => {
  return (
    <div className="filter-main mb-3">
      <div className="filter-textt mt-3"> Price Filter</div>
      <div className="filter-prctick">
        {/* <div className="d-flex">
          <div></div>
        </div> */}
        <Form>
          {["checkbox"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                className="filter-chktxt"
                type={type}
                id={`default-${type}`}
                label={`$0.00 - $150.00 `}
              />
              <Form.Check
                className="filter-chktxt"
                type={type}
                id={`default-${type}`}
                label={`$150.00 - $350.00 `}
              />

              <Form.Check
                className="filter-chktxt"
                type={type}
                id={`default-${type}`}
                label={`$150.00 - $504.00 `}
              />

              <Form.Check
                className="filter-chktxt"
                type={type}
                id={`default-${type}`}
                label={` $450.00 +  `}
              />
            </div>
          ))}
          <div className="filter-lftsrc d-flex">
            <input type="text" className="filter-leftext" placeHolder="$10.00-20000$"/>
            <img className="logosection-srciconss" src={searchlft} />
          </div>

          <div className="mt-3">
            <div className="filter-textt mt-5">Rating Item</div>
          </div>
          
          <div > 
            <RatingComp/>
          </div>
          <div>
            <SupplierComp/>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Filter;
