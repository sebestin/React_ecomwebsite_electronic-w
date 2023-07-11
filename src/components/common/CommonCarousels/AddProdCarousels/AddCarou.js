import React, { useState } from "react";
import headphone from "../../../../assets/Icons/headphone.svg";
import watch from "../../../../assets/Icons/watch.svg";
import alexa from "../../../../assets/Icons/alexa.svg";
import earbuds from "../../../../assets/Icons/earbuds.svg";
import "./addcarou.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import leftarrow from "../../../../assets/Icons/leftarrow.svg";
import rightarrow from "../../../../assets/Icons/rightarrow.svg";
import add from "../../../../assets/Icons/add.svg";
const AddCarou = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      {/* <Carousel className='newcaroi' width="60%">
                <div>
                    <img src={headphone} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={watch} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={alexa}/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
      <div className="addprod-secondstep mt-5">
        <div>
          <img src={leftarrow} />
        </div>
        <div>
          {" "}
          <img src={watch} />{" "}
        </div>

        <div className="addprod-sign">
          {" "}
          <img src={add} />{" "}
        </div>

        <div>
          <img src={rightarrow} />{" "}
        </div>
      </div>
    </>
  );
};

export default AddCarou;
