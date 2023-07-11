import React from "react";
import { Button } from "react-bootstrap";
import "./calculate.css";

const Calculate = () => {
  return (
    <>
      <div className="calcul">
        <div className="calcul-frst">
          <span className="calcul-dlr">$</span>
        </div>

        <div className="calcul-secnd">
          <Button className="calcul-secbut">Calculate</Button>
        </div>

        <div className="calcul-thrd">Profit</div>

        <div className="calcul-frth">
          <span className="calcul-frthdlrs"> $ 20</span>
        </div>
      </div>
    </>
  );
};

export default Calculate;
