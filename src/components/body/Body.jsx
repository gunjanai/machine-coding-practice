import React from "react";
import { Link } from "react-router-dom";
import routesData from "./routesData";

function Body() {
  return (
    <div className="flex">
      {routesData.map((route, index) => (
        <div
          className="m-4 p-4 bg-purple-800 text-white rounded-lg"
          key={index}
        >
          <Link to={route.path}>{route.textToDisplay}</Link>
        </div>
      ))}
    </div>
  );
}

export default Body;
