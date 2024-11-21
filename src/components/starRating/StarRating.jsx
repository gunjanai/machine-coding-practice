import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function StarRating() {
  const [checkedValue, setCheckedValue] = useState(0);

  const handleChange = (value) => {
    setCheckedValue(checkedValue === value ? null : value); // Toggle between selected or unselected
  };

  return (
    <div className="bg-yellow-400 w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[40%] h-[40%] bg-black flex justify-center items-center text-5xl">
        {[1, 2, 3, 4, 5].map((value) => (
          <div key={value}>
            <input
              type="radio"
              className="hidden peer cursor-pointer"
              id={`star-${value}`}
              checked={checkedValue === value}
              onChange={() => handleChange(value)}
            />

            {/* Label linked to the radio input */}
            <label
              htmlFor={`star-${value}`}
              className={`text-gray-400 ${
                checkedValue >= value ? "text-yellow-500" : ""
              } transition-all duration-300`}
            >
              {/* FontAwesome icon */}
              <FontAwesomeIcon icon={faStar} />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StarRating;
