import React from "react";
import { Modal, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import lockimg from "./lockimg.png";
import "./PrivacyModal.css";
const Privacymodal = () => {
  return (
    <div className="main-container">
      <Modal.Dialog
        className="dialogDiv"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div>
          <img className="lockimgDiv" src={lockimg} />
        </div>
        <h1 className="headertext col-lg-12 md-6 sm-6">Terms & Conditions</h1>
        <Modal.Body>
          <section className="text-section">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, f eugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
            imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
            eget condimentum rhoncus, sem quam semper libero, sit amet
            adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
            pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
            tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis
            ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
            Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
            Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
          </section>
        </Modal.Body>

        <div className="footerbtn mb-3">
          <Button className="cookisbtn " variant="secondary">
            Accept cookies
          </Button>
          <NavLink className="declinebtn " to="/" exact>
            Decline
          </NavLink>
        </div>
      </Modal.Dialog>
    </div>
  );
};

export default Privacymodal;
