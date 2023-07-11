import React from "react";
import "./secondsection.css";
import { Button, Card } from "react-bootstrap";
// import ellipse from '../../../assets/Icons/ellipse.svg';
import question_ellipes from "../../../assets/Icons/question_ellipes.png";
const SecondSection = () => {
  return (
    <div className="container">
      <div className="mt-5 d-flex justify-content-center">
        <Card className="connect-second">
          <Card.Body>
            <Card.Text>
              <div className="d-flex">
                <div >
                  <img className='ellipse-imgvs' src={question_ellipes} />
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SecondSection;
