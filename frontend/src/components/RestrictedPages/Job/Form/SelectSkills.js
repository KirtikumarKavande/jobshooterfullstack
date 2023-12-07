import React from "react";

const SelectSkills = (props) => {
  const { data, selectFromOption,filteredData } = props;
  return (
    <div>
      { (
        <div className=" w-72 border border-gray-700 h-32      z-30 rounded-lg px-2 bg-[#F9FAFB] overflow-y-scroll">
          {filteredData?.map((item, index) => {
            return (
              <div
                key={item.isoCode}
                onClick={(e) => {
                  selectFromOption(item);
                }}
              >
                {item} <hr />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectSkills;
