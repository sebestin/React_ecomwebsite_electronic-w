import React from "react";
import "./listcard.css";
import { Button, Card } from "react-bootstrap";
import amazcard from "../../../assets/Icons/amazcard.svg";
import alexa from "../../../assets/Icons/alexa.svg";
import earbuds from "../../../assets/Icons/earbuds.svg";
import star from "../../../assets/Icons/star.svg";
import starwhite from "../../../assets/Icons/starwhite.svg";
import headphone from "../../../assets/Icons/headphone.svg";
import watch from "../../../assets/Icons/watch.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import listdata from "../../../assets/data/listdata";
const ListCard = () => {
  return (
    <div className="cardouter">
      <Card className="listcard-body">
        <img src={amazcard} className="listimg-logo" alt="brand_logo" />
        <Card.Body>
          <div>
            {/* -------------------------------------------------------------------------- Carousel start */}
            <Carousel autoplay={true}>
            <div>
                <img className="carou-imgl" src={watch} />
              </div>
              <div>
                <img className="carou-imgl" src={alexa} />
              </div>
              <div>
                <img src={earbuds} className="carou-imgl" />
              </div>
              <div>
                <img src={headphone} className="carou-imgl" />
              </div>
            </Carousel>
            {/* -------------------------------------------------------------------------- Carousel End */}
          </div>

          <Card.Title>HUAWEI Watch 3 Pro</Card.Title>
          {/* <Card.Text></Card.Text> */}
          <div className="d-flex listcard-stars">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={starwhite} />
          </div>
          <Card.Text className="listcard-textss">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </Card.Text>
          <div className="listcard-flxx">
            <Button className="buttonsection-butcrd">+ Add</Button>
            <div>$ 919</div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListCard;
//
