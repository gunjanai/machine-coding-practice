// Task: Create a Custom Hook for Debounced Value
// Task Description:
// Create a custom hook useDebounce that debounces a given value. Use this hook to debounce the input value and display it after a delay.

// Requirements:

// Create useDebounce Hook: Implement a custom hook to debounce a value.
// Debounce Input: Debounce the input value and update it after a specified delay.
// Display Debounced Value: Use the hook to display the debounced value of an input field.

import { useEffect, useState } from "react";

const useDebounce = (value) => {
  const [data, setData] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(value);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [value]);

  console.log("data from hook: ", data);
  return data;
};

export default useDebounce;
