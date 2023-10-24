import React from "react";
import { HOMEPAGE_BIG_TEXT } from "../utilities/constant/Home/homePageConstant";

const IntroText = () => {
  return (
    <div
      className=" text-6xl font-light  text-[rgb(143,88,73)]"
      style={{ marginTop: "1rem", display: "block" }}
    >
      {HOMEPAGE_BIG_TEXT}
    </div>
  );
};

export default IntroText;
