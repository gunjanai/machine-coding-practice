import React from "react";
import { Link } from "react-router-dom";
import routesData from "./routesData";

function Body() {
  return (
    <div>
      <h1 className="font-bold text-3xl my-10 text-purple-800">
        Gunjan Sengar's React Machine Coding Round Practice
      </h1>
      <div className="flex flex-wrap">
        {routesData.map((route, index) => (
          <div
            className="m-4 p-4 bg-purple-800 text-white rounded-lg"
            key={index}
          >
            <Link to={route.path}>{route.textToDisplay}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
