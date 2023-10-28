import React, { useEffect, useState } from "react";

const SearchAndSelect = (props) => {
  const {
    label,
    type,
    name,
    onChange,
    value,
    data,
    searchString,
    onClick,
    isShowSuggestion,
    setIsShowSuggestion,

    onFocus,
    onBlur
  } = props;
  console.log("dataaaaaaa",data)
  console.log("suggestion",isShowSuggestion)
  const [searchResult, setSearchResult] = useState([]);

  console.log("sugge", searchString);

  useEffect(() => {
    const result = data.filter((item) => {
      if (
        item?.name
          ?.toLowerCase()
          .includes(searchString?.toLowerCase())
      ) {
        return item;
      }
    });
    console.log(">>>>", result);
    setSearchResult(result);
  }, [searchString,data]);
console.log("search Resu",searchResult)
  return (
    <div
    onFocus={onFocus}
    // onBlur={onBlur}
      className="w-full relative"
      // onFocus={() => {
      //   setIsShowSuggestion(true);
      // }}
      // onBlur={() => {
      //   setIsShowSuggestion(false);
      // }}
    >
      <div>
        <label>{label}</label>
        <div
          className="flex items-center justify-center 
  border mt-1 w-full h-8 border-black text-black text-md rounded-md pl-2 hover:border-2 "
        >
          <input
            className=" w-full h-6 outline-none   text-md"
            type={type}
            name={name}
            onChange={onChange}
            value={value}
           
          />
        </div>
        <div className="w-full max-h-[50vh] overflow-y-scroll border shadow-lg absolute z-50 bg-slate-50">
          {
          isShowSuggestion&&  searchResult?.map((item) => {
              return (
                <div
                  onClick={(e) => {
                    onClick(item);
                  }}
                  className="pl-2 hover:bg-gray-300"
                >
                  {item.name} <hr />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchAndSelect;
