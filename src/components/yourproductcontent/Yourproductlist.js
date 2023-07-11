import React, { useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./yourproductlist.css";
import listdata from "../../assets/data/listdata";
import amazcard from "../../assets/Icons/amazcard.svg";
import alexa from "../../assets/Icons/alexa.svg";
import ebay from "../../assets/Icons/ebaylogo.svg";
import aliexplogo from "../../assets/Icons/aliexplogo.svg";
import earbuds from "../../assets/Icons/earbudsnew.svg";
import star from "../../assets/Icons/star.svg";
import starwhite from "../../assets/Icons/starwhite.svg";
import headphone from "../../assets/Icons/headphone.svg";
import watch from "../../assets/Icons/watch.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import YourproductModal from "./YourproductModal";
import Welcomeheader from "./Welcomeheader";

const Yourproductlist = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="third-mains mt-3">
        <div className="row">
          <Welcomeheader />

          <Col sm={12} md={12} lg={12} xl={12} className="third-listwrp">
            {listdata.map((item) => {
              return (
                <Col sm={12} md={4} lg={4} xl={3}>
                  <Card className="listcard-body1">
                    <Card.Body>
                        {/* -------------------------------------------------------------------------- Carousel start */}
                        <Carousel autoplay={true} emulateTouch={true}>
                          <div className="images">
                            <div className="card-logo">
                              {" "}
                              <img
                                src={ebay}
                                alt="brand_logo"
                                className="listimg-logo"
                              />
                            </div>
                            <img src={headphone} className="carou-imgl" alt="headhome" />
                          </div>

                          <div className="images">
                            <div className="card-logo">
                              <img
                                src={amazcard}
                                alt="brand_logo"
                                className="listimg-logo"
                              />
                            </div>
                            <img src={watch} className="carou-imgl" alt="watch" />
                          </div>

                          <div className="images">
                            <div className="card-logo">
                              <img
                                src={ebay}
                                alt="brand_logo"
                                className="listimg-logo"
                              />
                            </div>
                            <img src={alexa} className="carou-imgl" alt="alexa"/>
                          </div>
                          <div>
                            <div className="card-logo">
                              <img
                                src={aliexplogo}
                                alt="brand_logo"
                                className="listimg-logo"
                              />
                            </div>
                            <img src={earbuds} className="carou-imgl" alt="earbuds"/>
                          </div>
                        </Carousel>
                        {/* -------------------------------------------------------------------------- Carousel End */}
                    

                      <Card.Title className="listcard-nametxt">
                        {item.name}
                      </Card.Title>
                      {/* <Card.Text></Card.Text> */}
                      <div className="d-flex listcard-stars">
                        <img src={star} alt='star' />
                        <img src={star}  alt='star'/>
                        <img src={star}  alt='star'/>
                        <img src={star}  alt='star'/>
                        <img src={starwhite}  alt='star'/>
                      </div>
                      <div className="d-flex">
                        <Card.Text className="listcard-textss1 d-flex">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed
                        </Card.Text>
                        <div className="listcard-price1">$99</div>
                      </div>
                      <div className="listcard-flxx">
                        <Button
                          className="buttonsection-butcrd"
                          onClick={handleShow}
                        >
                          Edit
                        </Button>
                        <div className="listcard-removetext">Remove</div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}

            <YourproductModal show={show} handleClose={handleClose} />

            {/* <PlatformModal
            show={show}
            handleClose={handleClose}
           /> */}
          </Col>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Yourproductlist;
