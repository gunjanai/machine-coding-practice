import { useState } from "react";

function Tictactoe() {
  const [userPlay, setUserPlay] = useState(true);
  const [gameData, setGameData] = useState({});
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    setReset(true);
  };

  const handleClick = (boxNumber) => {
    if (userPlay) {
    }
  };

  return (
    <div className="bg-[#1A1A1A] w-[100vw] h-[100vh] flex flex-col items-center text-white">
      <h1 className=" text-4xl font-bold m-8">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((boxNumber) => (
          <div
            className="w-32 h-32 bg-[#2A3439]"
            key={boxNumber}
            onClick={() => handleClick(boxNumber)}
          >
            {}
          </div>
        ))}
      </div>
      <button
        className="text-xl border-white border p-2 px-4 rounded-xl mt-4"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}

export default Tictactoe;
