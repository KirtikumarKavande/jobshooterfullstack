import React, { useState } from "react";

const useInput = (data) => {
  const [userInput, setUserInput] = useState(data);

  const onChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  return { userInput, onChange,setUserInput };
};

export default useInput;
