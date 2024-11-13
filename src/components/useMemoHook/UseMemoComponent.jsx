import React, { useMemo, useState } from "react";

function UseMemoComponent() {
  const [a, setA] = useState(12376378462837492384928349823);
  const expensiveCalculation = (num) => {
    console.log("calculating");
    return num * 1287381734128318;
  };

  const memoizedResult = useMemo(() => expensiveCalculation(a), [a]);

  //   const memoizedResult = expensiveCalculation(a);

  return (
    <div className="flex flex-col">
      {memoizedResult}
      <button onClick={() => setA(1728381734823734)}>Button</button>
    </div>
  );
}

export default UseMemoComponent;
