import React from "react";
import "./commonnavbar.css";
import admin from "../../../assets/Images/admin.svg";

const CommonNavbar = () => {
  return (
    <div>
      <div className=" newwidth mt-5">
        <div className="newflxx logosection">
          <div className="logosection-text">LOGO</div>
          <div className="d-flex buttonsection">
            <div className="d-flex ">
              <div>
                <img className="firstsectio-imgsc" src={admin} />{" "}
              </div>
              <div>
                <div className="firstsectio-txt1">Sam Alexander</div>
                <div className="firstsectio-txt2">Admin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonNavbar;
