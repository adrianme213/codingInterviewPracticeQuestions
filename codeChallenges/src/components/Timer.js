import React, { useState } from "react";

const displayTimeInHourMinSec = (curTime) => {
  let timeInSec = curTime;
  let hours = Math.floor(timeInSec / 3600);
  timeInSec -= hours * 3600;
  let mins = Math.floor(timeInSec / 60);
  timeInSec -= mins * 60;
  let secs = timeInSec;

  if (String(hours).length === 1) hours = `0${hours}`;
  if (String(mins).length === 1) mins = `0${mins}`;
  if (String(secs).length === 1) secs = `0${secs}`;

  return `${hours}:${mins}:${secs}`;
};

const Timer = ({ title, deleteTimer }) => {
  const [time, setTime] = useState(0);
  const [isTiming, setIsTiming] = useState(false);
  const [myInterval, _] = useState({ interval: null });

  const toggleTiming = (myTime, myIntervalPointer) => {
    if (myIntervalPointer["interval"]) {
      setIsTiming(false);
      clearInterval(myIntervalPointer["interval"]);
      myIntervalPointer["interval"] = null;
    } else {
      setIsTiming(true);
      myIntervalPointer["interval"] = setInterval(() => {
        myTime += 1;
        setTime(myTime);
      }, 1000);
    }
  };

  const deleteThisTimer = (myIntervalPointer, title) => {
    if (myIntervalPointer["interval"]) {
      clearInterval(myIntervalPointer["interval"]);
    }
    deleteTimer(title);
  };

  return (
    <div>
      <p>{title}</p>
      {displayTimeInHourMinSec(time)}
      <button onClick={() => toggleTiming(time, myInterval)}>
        {isTiming ? "Stop" : "Start"}
      </button>
      <button onClick={() => deleteThisTimer(myInterval, title)}>DEL</button>
    </div>
  );
};

export default Timer;
