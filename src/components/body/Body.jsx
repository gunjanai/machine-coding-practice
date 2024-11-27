import React from "react";
import { Link } from "react-router-dom";
import routesData from "./routesData";

function Body() {
  return (
    <div className="bg-teal-900 w-[100vw] h-[100vh] p-8 flex flex-col items-center">
      <h1 className="font-bold text-4xl text-[#A77C4C]">The Shire</h1>
      <h1 className="font-bold text-3xl text-[#A77C4C]">
        Gunjan Sengar's React Machine Coding Round Practice
      </h1>
      <div className="flex flex-wrap">
        {routesData.map((route, index) => (
          <div
            className="my-4 mr-4 p-4 bg-[#F1E8C8] border border-[#D1C8B0] hover:bg-[#D69F57] cursor-pointer text-[#3E4B3A] rounded-lg"
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
