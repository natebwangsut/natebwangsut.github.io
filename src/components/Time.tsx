import { useState, useEffect } from "react";
import { formatTime } from "../lib/helpers";

const Time = () => {
  const updateClock = () => {
    const timeDisplay = document.getElementById("timeDisplay");
    const now = new Date();

    if (timeDisplay) {
      timeDisplay.textContent = formatTime(now);
      timeDisplay.setAttribute("datetimedateTime", now.toISOString());
    }
  };

  const [intervalState, setIntervalState] = useState<
    ReturnType<typeof setInterval>
  >(() => setInterval(updateClock, 1000));

  useEffect(() => {
    // interval = setInterval(updateClock, 1000);
    setIntervalState(setInterval(updateClock, 1000));
    return () => {
      clearInterval(intervalState);
    };
  });

  return (
    <time
      dateTime=""
      id="timeDisplay"
      className="text-2xl xl:text-5xl xl:whitespace-nowrap w-50 xl:w-100 h-[calc(100%-28px)] font-serif flex justify-center items-center"
    >
      <Time />
    </time>
  );
};

export default Time;
