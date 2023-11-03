import React from "react";

const Email = (props) => {
  const {onChange,name}=props
  return (
    <div className="mt-10">
      <label>Email</label>
      <div
        className="flex items-center
    border mt-1 w-full lg:w-[30vw] h-14 border-black text-gray-900 text-md rounded-md pl-2 hover:border-2 "
      >
        <input
          className="w-[100vw] h-10 outline-none pb-1 text-md"
          type="Email"
          onChange={onChange}
          name={name}
        />
      </div>
    </div>
  );
};

export default Email;
