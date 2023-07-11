import React, { useState } from "react";
import { Button, Modal, Card, ModalBody } from "react-bootstrap";
import "./productmodal.css";
import headphone from "../../../../assets/Icons/headphone.svg";
import watch from "../../../../assets/Icons/watch.svg";
import alexa from "../../../../assets/Icons/alexa.svg";
import earbuds from "../../../../assets/Icons/earbuds.svg";
import amazcard from "../../../../assets/Icons/amazcard.svg";
import whitestar from "../../../../assets/Icons/whitestar.svg";
import star from "../../../../assets/Icons/star.svg";
import ali from "../../../../assets/Icons/ali.svg";
import amazon from "../../../../assets/Icons/amazon.svg";
import ebay from "../../../../assets/Icons/ebay.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import LoginTab from "../../LoginTab/LoginTab";
const ProductModal = (props) => {
  return (
    <div classname="modalprod-body ">
      <Modal
        show={props.show}
        handleClose={props.handleClose}
        onHide={props.handleClose}
        centered
        size="sm"
        // contentClassName="productmod-bdy"
      >
        <div className="d-flex justify-content">
          <Modal.Body className="  productmod-bdy">
            <div className="prodmodduo-bkgs">
              <Card className="prodmod-cardmain">
                <Card.Img
                  variant="top"
                  className="prodmod-logo"
                  src={amazcard}
                />
                <Card.Body>
                  <Carousel emulateTouch={true}>
                    <div>
                      <img src={headphone} alt='headphone' className="cas-imgl" />
                    </div>
                    <div>
                      <img className="cas-imgl" alt='watch' src={watch} />
                    </div>
                    <div>
                      <img className="cas-imgl"  alt='alexa' src={alexa} />
                    </div>
                    <div>
                      <img src={earbuds} alt='earbuds' className="cas-imgl" />
                    </div>
                  </Carousel>
                  <Card.Text className="productmod-crdtexts">
                    HUAWEI Watch 3 Pro
                  </Card.Text>
                  <div>
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={star} alt='star'/>
                    <img src={star} alt='star' />
                    <img src={whitestar}alt='star' />
                  </div>

                    <Card.Text className="listcard-textss ">
                      Lorem ipsum dolor sit amet.
                    </Card.Text>
                  <div className="d-flex justify-content-between">
                  <Button className='buttonsection-butcrd'> + Add</Button>

                    <Card.Text className="prodmod-price">$ 99</Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card className="prodmod-cardtwo">
                <Card.Body>
                  <Card.Title className="text-center">
                    Select the platform
                  </Card.Title>
                  <LoginTab
                    src={ali}
                    className="w-100 mt-2 buts-ali"
                    imgclass="newimg"
                  />

                  <LoginTab
                    src={amazon}
                    className="w-100 mt-2 buts-amaz"
                    imgclass="newimg"
                  />

                  <LoginTab
                    src={ebay}
                    className="w-100 mt-2  buts-ebay"
                    imgclass="newimg"
                  />
                </Card.Body>
              </Card>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default ProductModal;
