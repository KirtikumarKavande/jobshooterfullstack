import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import navItems from "./NavItems";
import NavItemsRenderer from "./NavItemsRenderer";
const Navbar = () => {
  return (
    <div>
      <div className="h-16 border w-full fixed top-0  bg-[#FFFFFF] z-50 flex items-center px-24">
        <div className="flex space-x-20 items-center justify-between">
          <div className="text-blue-700 font-bold text-2xl">JobShooter</div>
          {navItems.map((item) => (
            <NavItemsRenderer logo={item.logo} name={item.name} path={item.path}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
