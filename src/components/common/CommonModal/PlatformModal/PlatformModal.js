import React, { useState } from "react";
import ali from "../../../../assets/Icons/ali.svg";
import amazon from "../../../../assets/Icons/amazon.svg";
import './platformmodal.css';
import ebay from "../../../../assets/Icons/ebay.svg";

import { Button, Modal, Card } from "react-bootstrap";
import LoginTab from "../../LoginTab/LoginTab";
const PlatformModal = (props) => {
  return (
    <div>
      {" "}
      <Modal centered contentClassName='platform-mods' show={props.show} onHide={props.handleClose}>
        <Modal.Body>
          <div className="mt-3 d-flex justify-content-center">
            {" "}
            <Card className="platform-third">
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
              </Card.Body>
            </Card>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PlatformModal;
