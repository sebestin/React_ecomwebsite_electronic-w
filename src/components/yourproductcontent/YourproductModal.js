import React, { useState } from "react";
import { Button, Modal, Card } from "react-bootstrap";
import "./YourproductModal.css";
import headphone from "../../assets/Icons/headphone.svg"
import watch from "../../assets/Icons/watch.svg"
import alexa from "../../assets/Icons/alexa.svg"
import earbuds from "../../assets/Icons/earbuds.svg"
import amazcard from "../../assets/Icons/amazcard.svg"
import whitestar from "../../assets/Icons/whitestar.svg"
import star from "../../assets/Icons/star.svg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const ProductModal = (props) => {
  return (
    <div classname="modalprod-body1">
      <Modal
        show={props.show}
        handleClose={props.handleClose}
        onHide={props.handleClose}
        centered
        size="sm"
      >
     
        <Modal.Body className="productmod-bdy1">
          <Card className="prodmod-cardmain1">
            <Card.Img variant="top" className="prodmod-logo1" src={amazcard} />
            <Card.Body>
              <Carousel emulateTouch={true}>
                <div>
                  <img src={headphone} className="cas-imgl1" />
                </div>
                <div>
                  <img className="cas-imgl1" src={watch} />
                </div>
                <div>
                  <img className="cas-imgl1" src={alexa} />
                </div>
                <div>
                  <img src={earbuds} className="cas-imgl1" />
                </div>
              </Carousel>
              <Card.Text className="productmod-crdtexts1">
                HUAWEI Watch 3 Pro
              </Card.Text>
              <div>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={whitestar} />
              </div>
          
              <div className="d-flex justify-content-between">
                <Card.Text className='listcard-textss1 '>
                  Lorem ipsum dolor sit amet.
                </Card.Text>
               
                <Card.Text className='prodmod-price1'>$ 99</Card.Text>
                
              </div>
              <div className="listcard-flxx2">
                      <Button
                        className="buttonsection-butcrd2"
                        onClick={''}
                      >
                       Edit
                      </Button>
                      </div>
            </Card.Body>
          </Card>
        </Modal.Body>
  
      </Modal>
    </div>
  );
};

export default ProductModal;
