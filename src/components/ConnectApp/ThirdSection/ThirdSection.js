import React from "react";
import "./thirdsection.css";
import { Card } from "react-bootstrap";
import LoginTab from "../../common/LoginTab/LoginTab";
import ali from "../../../assets/Icons/ali.svg";

import amazon from "../../../assets/Icons/amazon.svg";

import ebay from "../../../assets/Icons/ebay.svg";

const ThirdSection = () => {
  return (
    <div className="container  col-xs-12  col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div className="mt-3 d-flex justify-content-center">
        {" "}
        <Card className="connect-third ">
          <Card.Body>
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

<LoginTab
            //   src={}
            name='+'
              className="w-100 mt-2 plus"
            
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ThirdSection;
