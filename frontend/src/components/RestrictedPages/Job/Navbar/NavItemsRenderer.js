import React from "react";
import {useNavigate} from 'react-router-dom'

const NavItemsRenderer = (props) => {
  const navigate=useNavigate()
  const { logo, name,path } = props;
  console.log("path",path)
const navigateToRoutes=()=>{
  navigate(path)
}
  return (
    <div className="flex" onClick={navigateToRoutes}>
      <div className="w-[80px] h-[52px]  flex-col  cursor-pointer text-center text-gray-700 justify-center items-center">
        <div className="text-center mx-auto ">
          {logo}
        </div>
        <div>{name}</div>
      </div>
    </div>
  );
};

export default NavItemsRenderer;
