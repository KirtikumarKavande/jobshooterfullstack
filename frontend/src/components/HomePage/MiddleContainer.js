import React from "react";
import IntroText from "./IntroText";
import Email from "./Email";
import Password from "./Password";
import {Link} from 'react-router-dom'
import Button from "../utilities/styles/Button";

const MiddleContainer = () => {
  return (
    <>
      <IntroText />
      <Email />
      <Password/>
      <div className="font-bold text-base mt-3 text-blue-600">Forget Password?</div>
      <Button>Sign in</Button>
    </>
  );
};

export default MiddleContainer;
