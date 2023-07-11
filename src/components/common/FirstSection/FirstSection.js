import React from "react";
import "./firstsection.css";
import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const FirstSection = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/searchproduct");
  }

  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="first-mains mt-5">
      <div className="logosection">
        <div className="logosection-text">LOGO</div>
        <div className="d-flex buttonsection">
          <Button className="buttonsection-butsbl" onClick={handleClick}>
            Login
          </Button>
          <Button className="buttonsection-butstrs" onClick={handleSignUp}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
