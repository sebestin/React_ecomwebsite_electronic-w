import React, { useState } from "react";
import pen from "../../../../assets/Icons/pen.svg";
import "./addproductmodal.css";
import { Modal, Card } from "react-bootstrap";
import amazcard from "../../../../assets/Icons/amazcard.svg";
import headphone from "../../../../assets/Icons/headphone.svg";
import watch from "../../../../assets/Icons/watch.svg";
import alexa from "../../../../assets/Icons/alexa.svg";
import earbuds from "../../../../assets/Icons/earbuds.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ListCard from "../../ListCard/ListCard";
import AddCarou from "../../CommonCarousels/AddProdCarousels/AddCarou";
import Calculate from "./CalculateComp/Calculate";
import TextComp from "./TextComp/TextComp";
const AddproductModal = (props) => {
  return (
    <div className="adprodsection">
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header className="addprod-logimg">
          <img src={amazcard} />
        </Modal.Header>
        <Modal.Body>
          <div className='enclosed d-flex'>
          <div className="addprod-textsrc w-100">
            <input
              type="text"
              value="HUAWEI Watch 3 Pro "
              className="addprod-textsrc w-100"
            />
            <img src={pen} className="addprod-search" />
          </div>
          <div className="addproduct-newcaro">
            <AddCarou />
            <Calculate />
            <TextComp />
          </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddproductModal;


