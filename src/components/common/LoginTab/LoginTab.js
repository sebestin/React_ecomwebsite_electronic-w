import React from "react";
import { Button } from "react-bootstrap";

const LoginTab = (props) => {
  return (
    <div>
      <Button onClick={props.onClick} className={`${props.className}`}>
        {props.name} {props.children}
        <img src={props.src}  className={`${props.imgclass}`} />
      </Button>
    </div>
  );
};

export default LoginTab;
