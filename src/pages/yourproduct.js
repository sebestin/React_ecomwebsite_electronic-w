import React from "react";

// import Welcomeheader from "../components/yourproductcontent/Welcomeheader";
import Yourproductlist from "../components/yourproductcontent/Yourproductlist";

import YourproductNav from "../components/yourproductcontent/YourproductNav";
import Yourproductsidebar from "../components/yourproductcontent/Yourproductsidebar";

const Yourproduct = () => {
  return (
    <>
      <YourproductNav />
      <div className="">
        <Yourproductsidebar />
        <Yourproductlist />
      </div>
    </>
  );
};

export default Yourproduct;
