import React, { useEffect, useState } from "react";

function AutoIncrementCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="m-8 text-4xl font-bold">Auto Increment Counter</h1>
      <span className="text-3xl text-teal-900">{count}</span>
    </div>
  );
}

export default AutoIncrementCounter;
