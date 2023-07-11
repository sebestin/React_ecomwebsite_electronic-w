import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import tableWatch from "../../../../assets/Images/table-watch.png";
import tableStar from "../../../../assets/Images/table-starts.png";
import { BiUpArrowAlt } from "react-icons/bi";
import SoldItems from "../SoldItems";
import tableData from "./TableData";
import "./Table.css";
import TableSection from "../../../Dashboard/TableSection/TableSection";

const Table = ({ item }) => {
  return (
      <div className=" tabsecmaincmb col-lg-12   col-md-12 col-xl-12">
        <div className="main-section ">
          <TableSection />
          <SoldItems />

        
          {tableData.map((item) => (
            <div className="d-flex main-content col-xl-10 col-lg-10 " key={item.id}>
              <Col md={3} sm={3} lg={3} xl={3} className="row-one">
                <div className="row-one-contet">
                  <img
                    src={item.image}
                    alt="watch not found"
                    className="img-one"
                  />
                  <div className="secound-section">
                    <div>
                      <p className="content-text">{item.name}</p>
                    </div>
                    <div className="star-section">
                      <div>
                        <img src={tableStar} />
                        <img src={tableStar} />
                        <img src={tableStar} />
                        <img src={tableStar} />
                        <img src={tableStar} />
                      </div>
                      <div>
                        <small>
                          <BiUpArrowAlt className="uparrow" />
                          {item.per}%
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={1} sm={1} lg={1} xl={1} className="row-price">
                ${item.price}
              </Col>
              <Col md={1} sm={1} lg={1} xl={1} className="row-sold">
                {item.sold}
              </Col>
              <Col md={1} sm={1} lg={1} xl={1} className="row-available">
                {item.available}
              </Col>
              <Col md={1} sm={1} lg={2} xl={2} className="row-revenue">
                ${item.revenue}
              </Col>
              <Col md={3} sm={3} lg={2} xl={2} className="row-info">
                <p>{item.info}</p>
              </Col>
              <Col md={2} sm={2} lg={2} xl={2} className="row-date">
                {item.date}
              </Col>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Table;
