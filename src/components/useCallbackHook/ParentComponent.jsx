import React, { useCallback, useState } from "react";
import Button from "./Button";

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  //   const handleClick = () => {
  //     setCount((prev) => prev + 1);
  //   };

  return (
    <div className="flex flex-col">
      {count}
      <Button onClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
