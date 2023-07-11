import React from "react";
import "./signupcard.css";
import { Card, Form } from "react-bootstrap";
import LoginTab from "../../common/LoginTab/LoginTab";
import ali from "../../../assets/Icons/ali.svg";
import amazon from "../../../assets/Icons/amazon.svg";
import ebay from "../../../assets/Icons/ebay.svg";
import newali from "../../../assets/Icons/newali.svg";


const SignupCard = (props) => {
  return (
    <div className="container d-flex justify-content-center">
      <Card className="cardmains ">
        <Card.Body>
          <Card.Title className="cardmains-title">Sign Up</Card.Title>
          <div className="cardmains-tabss">
            <LoginTab
              name="Continue with "
              // children="AliExpress"
              className="w-100 mt-2 buts-ali"
              src={newali}
              imgclass="newimg"
            />

            <LoginTab
              name="Continue with "
              // children="amazon"
              src={amazon}
              imgclass="newimg"
              className="w-100 mt-2 buts-amaz"
            />

            <LoginTab
              name="Continue with  "
              // children="ebay"
              src={ebay}
              imgclass="newimg"
              className="w-100 mt-2  buts-ebay"
            />
          </div>

          <div className="mt-3 mb-3">
            <strong>Or</strong>
          </div>

          <Form>
            <Form.Group
              className="mb-3 cardmains-fmtxt"
              controlId="formBasicEmail"
            >
              <Form.Label className='signups-labelss'>Email</Form.Label>
              <Form.Control
                className="cardmains-txip"
                type="email"
                placeholder="Your email"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 cardmains-fmtxt"
              controlId="formBasicPassword"
            >
              <Form.Label className='signups-labelss'>Name</Form.Label>
              <Form.Control
                className="cardmains-txip"
                type="text"
                placeholder="Your name"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 cardmains-fmtxt"
              controlId="formBasicPassword"
            >
              <Form.Label className='signups-labelss'>Username</Form.Label>
              <Form.Control
                className="cardmains-txip"
                type="text"
                placeholder=" Username"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 cardmains-fmtxt"
              controlId="formBasicPassword"
            >
              <Form.Label className='signups-labelss'>Password</Form.Label>
              <Form.Control
                className="cardmains-txip"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <LoginTab
              name="Sign Up"
              // children="ebay"
              className="w-100 mt-2 mb-5  buts-singup"
            />
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignupCard;
