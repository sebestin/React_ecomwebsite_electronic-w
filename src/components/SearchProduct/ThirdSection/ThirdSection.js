import React, { useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./thirdsection.css";
import ListCard from "../../common/ListCard/ListCard";
import listdata from "../../../assets/data/listdata";
import amazcard from "../../../assets/Icons/amazcard.svg";
import ebay from "../../../assets/Icons/ebaylogo.svg";
import aliexpress from "../../../assets/Icons/aliexplogo.svg";
import alexa from "../../../assets/Icons/alexa.svg";
import earbuds from "../../../assets/Icons/earbudsnew.svg";
import star from "../../../assets/Icons/star.svg";
import starwhite from "../../../assets/Icons/starwhite.svg";
import headphone from "../../../assets/Icons/headphone.svg";
import watch from "../../../assets/Icons/watch.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Filter from "../../common/FilterComp/Filter";
import ProductModal from "../../common/CommonModal/ProductModal/ProductModal";
import PlatformModal from "../../common/CommonModal/PlatformModal/PlatformModal";
import AddproductModal from "../../common/CommonModal/AddProductModal/AddproductModal";

const ThirdSection = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="third-mains mt-3">
      <div className="row_thirdsecion">
        <div className="serach-wdth">
          <Col sm={12} md={12} lg={3} xl={2}>
            <Filter />
          </Col>
          <Col sm={12} md={12} lg={9} xl={10} className="third-listwrp">
            {listdata.map((item) => {
              return (
                <Col sm={12} md={4} lg={4} xl={3}>
                  <Card className="listcard-body">
                    <Card.Body>
                        <Carousel autoplay={true} emulateTouch={true}>
                          <div className="image-search">
                            <div className="card-logo-search">
                              {" "}
                              <img
                                src={ebay}
                                alt="brand_logo"
                                className="listimg-logo"
                              />
                            </div>

                            <img src={headphone} className="carou-imgl" alt="headhome" />
                          </div>
                          <div className="image-search">
                          <div className="card-logo-search">
                              <img
                                src={amazcard}
                                alt="brand_logo"
                                className="listimg-logo"
                              />
                            </div>
                            <img src={watch} className="carou-imgl" alt="watch"/>
                          </div>
                          <div className="image-search">
                          <div className="card-logo-search">
                              <img
                                src={ebay}
                                alt="brand_logo"
                                className="listimg-logo"
                              />
                            </div>
                            <img src={alexa} className="carou-imgl" alt="alexa"/>
                          </div>
                          <div className="image-search">
                          <div className="card-logo-search">
                              <img
                                src={aliexpress}
                                alt="brand_logo"
                                className="listimg-logo"
                              />
                            </div>
                            <img src={earbuds} className="carou-imgl" alt="earbuds"/>
                          </div>
                        </Carousel>


                      <Card.Title className="listcard-nametxt">
                        {item.name}
                      </Card.Title>
                      {/* <Card.Text></Card.Text> */}
                      <div className="d-flex listcard-stars">
                        <img src={star}  alt='star'/>
                        <img src={star}  alt='star'/>
                        <img src={star}  alt='star'/>
                        <img src={star}  alt='star'/>
                        <img src={starwhite}  alt='star'/>
                      </div>
                      <Card.Text className="listcard-textss">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed
                      </Card.Text>
                      <div className="listcard-flxx">
                        <Button
                          className="buttonsection-butcrd"
                          onClick={handleShow}
                        >
                          + Add
                        </Button>
                        <div className="listcard-price">$ 99</div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
            <div className="d-flex">
              <ProductModal show={show} handleClose={handleClose} />

              {/* <PlatformModal
            show={show}
            handleClose={handleClose}
           /> */}
            </div>

            {/* <AddproductModal show={show} handleClose={handleClose} /> */}
          </Col>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
