import React, { useEffect, useState } from "react";

const data = ["apple", "banana", "grape", "mango", "orange", "peach"];
function AutoComplete() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (input.trim() !== "") {
        setSuggestions(
          data.filter((item) => {
            return item.toLowerCase().includes(input.toLowerCase());
          })
        );
      } else {
        setSuggestions("");
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return (
    <div className="flex flex-col w-40 m-auto">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        className="border border-black mt-5"
      />
      {suggestions && (
        <div className="w-full m-auto">
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="flex flex-col hover:bg-gray-200 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AutoComplete;
