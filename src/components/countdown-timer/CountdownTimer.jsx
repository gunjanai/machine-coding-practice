import { useEffect, useState } from "react";

const targetDate = new Date("2025-12-12");

const getTimeRemaining = () => {
  const timeRemaining = targetDate - new Date();

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
  const seconds = Math.floor((timeRemaining / 1000) % 60);
  return { days, hours, minutes, seconds };
};

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center ">
      <h1 className="font-bold text-3xl m-10 ">Countdown to 12-12-2025</h1>
      <div className="flex justify-around items-center">
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div className="flex flex-col bg-teal-800 p-10 rounded-xl text-white">
              <div className="font-bold text-xl">{value}</div>
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountdownTimer;
