import React from "react";

const Select = (props) => {
  const { onChange, label, name,optionInSelect } = props;
  return (
    <div>
      <div>
        <label className="text-gray-600">{label}</label>
        <select
          onChange={onChange}
          name={name}
          id="countries"
          className="flex items-center justify-center 
    border mt-1 w-full h-8 border-gray-600 text-gray-700 text-md rounded-md pl-2 hover:border-2"
        >
          {optionInSelect.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
