import { act, useEffect, useState } from "react";

const lights = [
  {
    light: "red",
    css: "bg-red-600",
    switchOn: "3000",
    next: "green",
  },
  {
    light: "yellow",
    css: "bg-yellow-600",
    switchOn: "500",
    next: "red",
  },
  {
    light: "green",
    css: "bg-green-400",
    switchOn: "2000",
    next: "yellow",
  },
];

function TrafficLights() {
  const [activeLight, setActiveLight] = useState("green");
  const light = lights.find((light) => activeLight === light.light);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveLight(light.next);
    }, [light.switchOn]);

    return () => clearTimeout(timer);
  }, [light, activeLight]);

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center">
      <h1 className="text-4xl font-bold m-8">Traffic lights</h1>
      {lights.map((current) => (
        <div
          className={`w-20 h-20 m-4 rounded-full border border-black bg-gray-300 ${
            activeLight === current.light && current.css
          }`}
        ></div>
      ))}
    </div>
  );
}

export default TrafficLights;
