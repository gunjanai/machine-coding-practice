import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function StarRating() {
  const [checked, setChecked] = useState(0);

  const handleChange = (value) => {
    setChecked(value === checked ? null : value);
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-yellow-400 flex justify-center items-center">
      <div className="w-[40vw] h-[40vh] bg-black flex flex-col justify-center items-center">
        <h1 className="font-bold text-white text-4xl">Star Rating</h1>
        <div className="flex mt-5 text-4xl">
          {[1, 2, 3, 4, 5].map((value) => (
            <div key={value}>
              <input
                type="radio"
                onChange={() => handleChange(value)}
                checked={value === checked}
                className="hidden peer"
                id={`star-${value}`}
              />
              <label htmlFor={`star-${value}`}>
                <FontAwesomeIcon
                  icon={faStar}
                  className={`text-gray-300 ${
                    checked >= value ? "text-yellow-400" : ""
                  }`}
                />
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StarRating;
