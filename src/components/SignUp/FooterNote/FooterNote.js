import React from "react";
import "./footernote.css";
import { Button, Col, Modal } from "react-bootstrap";

const FooterNote = () => {
  return (
    <div className="mt-5 ">
      <Modal.Dialog className="footernote-mainn">
        <Modal.Body className="footernote-bodys">
          <div>
            <div className="foot-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad{" "}
            </div>
          </div>
          <div className='d-flex justify-content-flex-end footernote-butns '>
            <Button className="buttonsection-butcook">Accept cookie</Button>
            <Button className="buttonsection-butstrs">Settings</Button>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default FooterNote;
