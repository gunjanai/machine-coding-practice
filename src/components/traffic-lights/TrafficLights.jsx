import { useEffect, useState } from "react";

const lights = [
  {
    light: "red",
    css: "bg-red-500",
    next: "green",
    wait: 3000,
  },
  {
    light: "yellow",
    css: "bg-yellow-500",
    next: "red",
    wait: 500,
  },
  {
    light: "green",
    css: "bg-green-500",
    next: "yellow",
    wait: 2000,
  },
];

function TrafficLights() {
  const [activeLight, setActiveLight] = useState("green");
  const light = lights.find((light) => activeLight === light.light);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveLight(light.next);
    }, [light.wait]);

    return () => clearTimeout(timer);
  }, [light, activeLight]);

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center">
      <h1 className="text-4xl font-bold m-8">Traffic Lights</h1>
      {lights.map((current) => (
        <div
          className={`w-20 h-20 rounded-full m-4 ${
            activeLight === current.light ? current.css : " bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
}

export default TrafficLights;
