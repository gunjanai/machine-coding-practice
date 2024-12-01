import React, { useEffect, useState } from "react";

const data = ["apple", "banana", "grape", "mango", "orange", "peach"];
function AutoComplete() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input) {
        setSuggestions(
          data.filter((fruit) =>
            fruit.toLowerCase().includes(input.toLowerCase())
          )
        );
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold m-8">Auto Complete</h1>
      <div className="w-[50vw]">
        <input
          className="border border-teal-700 p-4 w-full"
          onChange={handleChange}
          value={input}
        />
        {suggestions && (
          <div className="flex flex-col w-full border border-black">
            {suggestions.map((fruit) => (
              <div
                className="text-2xl w-full p-4 hover:bg-teal-200 cursor-pointer"
                onClick={() => {
                  setInput(fruit);
                  setSuggestions([]);
                }}
              >
                {fruit}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AutoComplete;
