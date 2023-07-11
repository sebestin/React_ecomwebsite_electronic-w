import React from "react";
import "./ratingcomp.css";
import whitestar from "../../../../assets/Icons/whitestar.svg";
import star from "../../../../assets/Icons/star.svg";
import { Form } from "react-bootstrap";

const RatingComp = () => {
  return (
    <div className="mt-3">
      <div className="rating-stars">
        <div className="d-flex justify-content-between  rating-cpflx;">
          <div className="d-flex rating-strnum">
            <Form.Check type="checkbox" className='ratin-stars' />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={whitestar} />
          </div>
          <div className='rating-txttr'> (2341)</div>
        </div>

        {/* ------------------------------------- */}

        <div className="d-flex justify-content-between  rating-cpflx;">
          <div className="d-flex rating-strnum">
            <Form.Check type="checkbox" className='ratin-stars' />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={whitestar} />

            <img src={whitestar} />
          </div>
          <div className='rating-txttr'> (1726)</div>
        </div>

        {/* -------------------------------------- */}
        <div className="d-flex justify-content-between  rating-cpflx;">
          <div className="d-flex rating-strnum">
            <Form.Check type="checkbox" className='ratin-stars'  />
            <img src={star} />
            <img src={star} />
            <img src={whitestar} />
            <img src={whitestar} />

            <img src={whitestar} />
          </div>
          <div className='rating-txttr'> (258)</div>
        </div>

        {/* -------------------------------------- */}
        <div className="d-flex justify-content-between  rating-cpflx;">
          <div className="d-flex rating-strnum">
            <Form.Check type="checkbox" className='ratin-stars' />
            <img src={star} />
            <img src={star} />
            <img src={whitestar} />
            <img src={whitestar} />
            <img src={whitestar} />
          </div>
          <div className='rating-txttr'> (25)</div>
        </div>

        {/* -------------------------------------- */}
      </div>
    </div>
  );
};

export default RatingComp;
