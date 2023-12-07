import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import navItems from "./NavItems";
import NavItemsRenderer from "./NavItemsRenderer";
const Navbar = () => {
  return (
    <div>
      <div className="h-16 border w-[100vw] fixed top-0  bg-[#FFFFFF] z-50 flex items-center justify-center lg:justify-normal lg:px-24">
        <div className="flex space-x-20 items-center justify-between">
          <div className="text-blue-700  font-bold lg:text-2xl text-5xl ">JobShooter</div>
          <div className="hidden md:flex">
          {navItems.map((item) => (
            <NavItemsRenderer logo={item.logo} name={item.name} path={item.path}/>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
