import React from "react";
import Card from "../components/SignUp/Card/SignupCard";
import FirstSection from "../components/common/FirstSection/FirstSection";
import FooterNote from "../components/SignUp/FooterNote/FooterNote";

const SignUp = () => {
  return (
    <div>
      <FirstSection/>
      <Card/>
      <FooterNote/>
    </div>
  );
};

export default SignUp;
