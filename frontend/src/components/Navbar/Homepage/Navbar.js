import React from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { navItems } from "./navitems";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex   w-full h-20 items-center ">
        <div className="w-1/3 font-bold text-4xl text-blue-500 ">
          Job Shooter
        </div>
        <div className="w-2/3 flex space-x-4 ">
          {navItems.map((item) => {
            return (
              <div key={item.name} className=" w-20 hidden  lg:block">
                <div className=" px-7 text-gray-600">{item.icon}</div>
                <div className="text-gray-600 text-center text-sm mt-1">
                  {item.name}
                </div>
              </div>
            );
          })}

          <div className=" w-24 border-x-gray-500 hidden lg:block border-y-white border ">
            <div className=" px-8 text-gray-600">
              <GrPersonalComputer size={25} />
            </div>
            <div className="text-gray-600 text-center text-sm mt-1 ">
              Get the app
            </div>
          </div>

          <button
            onClick={() => {
              navigate("onboarding/signup");
            }}
            className=" hover:bg-gray-100 text-gray-500 font-bold py-1 px-5 rounded-full"
          >Join now</button>

          <button className=" hover:bg-gray-100 text-blue-500 border border-blue-500 font-semibold py-1 px-5 rounded-full ">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
