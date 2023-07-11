import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
// import validator from "validator";

import "./LoginCard.css";
const LoginCard = () => {
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPassword] = useState("");
  // const validateEmail = (e) => {
  //   var email = e.target.value;
  // };
  // const validatePassword = (e) => {
  //   var password = e.target.value;
  // };

  const navigate = useNavigate();

  function handleClick() {
    navigate("/searchproduct");
  }
  return (
    <div className="container d-flex justify-content-center ">
      <Card className="cardDiv mt-6 mb-5">
        <Card.Body>
          <Card.Title className="logintext mb-5">Login</Card.Title>

          <div className="mb-3">
            <label className="emailtext">Email</label>
            <input
              type="email"
              required
              className="form-control"
              placeholder="Enter email"
              // onChange={(e) => validateEmail(e)}
            />
          </div>
          <div className="mb-3">
            <label className="emailtext">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              // onChange={(e) => validatePassword(e)}
            />
          </div>
          <div className="mb-3">
            <NavLink className="navtext" to="privacy">
              {" "}
              <p className="forgot-password text-right mb-5">Forgot password</p>
            </NavLink>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              onClick={handleClick}
              className="loginbtn btn btn-primary"
            >
              Login
            </button>

            <NavLink className="signupbtn mt-3" to="/signup" exact>
              Sign up
            </NavLink>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginCard;
