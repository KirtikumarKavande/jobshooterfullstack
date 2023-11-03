import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
// import { showUserDetails } from "../../../store/UserOnBoardSlice";

const SearchAndSelect = (props) => {
  const {
    label,
    type,
    name,
    onChange,
    value,
    data,
    searchString,
    setSearchString,
    onClick,
    isShowSuggestion,
    onFocus,
    zIndexOfInput,
    setIsShowSuggestion,
    setCode,
    userInput,
    onBlur,
  } = props;
  const [searchResult, setSearchResult] = useState([]);
  const [cursorOnIndex, setCursorOnIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const result = data.filter((item) => {
      if (item?.name?.toLowerCase().includes(searchString?.toLowerCase())) {
        return item;
      }
    });
    setSearchResult(result);
  }, [searchString, data]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && cursorOnIndex < searchResult.length - 1) {
      setCursorOnIndex(cursorOnIndex + 1);
    } else if (e.key === "ArrowUp" && cursorOnIndex > 0) {
      setCursorOnIndex(cursorOnIndex - 1);
    } else if (e.key === "Enter") {
      // dispatch(showUserDetails({ [name]: searchResult[cursorOnIndex]?.name }));

      setSearchString({
        ...userInput,
        [name]: searchResult[cursorOnIndex]?.name,
      });
      setCode && setCode(searchResult[cursorOnIndex]?.isoCode);
      setIsShowSuggestion(false);
    }
  };

  return (
    <div onFocus={onFocus} className="w-full relative">
      <div>
        <label className="text-gray-700 text-sm">{label}</label>
        <div
          className="flex items-center justify-center 
  border mt-1 w-full h-8 border-gray-700 text-black text-md rounded-md pl-2 hover:border-2 "
        >
          <input
            autocomplete="off"
            className=" w-full h-6 outline-none   text-md"
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div
          style={{ zIndex: zIndexOfInput }}
          className="w-full max-h-[50vh] overflow-y-scroll border shadow-lg absolute z-50 bg-slate-50"
        >
          {isShowSuggestion &&
            searchResult?.map((item, index) => {
              return (
                <div
                  key={item.isoCode}
                  onClick={(e) => {
                    onClick(item);
                  }}
                  className={`pl-2 hover:bg-gray-300  cursor-pointer ${
                    index === cursorOnIndex && "bg-gray-200"
                  } `}
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
