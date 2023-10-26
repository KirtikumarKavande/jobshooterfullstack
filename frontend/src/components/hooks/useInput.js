import React, { useState } from "react";

const useInput = () => {
  const [userInput, setUserInput] = useState({});

  const onChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  return { userInput, onChange };
};

export default useInput;
