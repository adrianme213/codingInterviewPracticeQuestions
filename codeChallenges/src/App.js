import React, { useState } from "react";
import "./styles.css";
import TimerList from "./components/TimerList";

export default function App() {
  const [timerTitles, setTimerTitles] = useState([]);
  const [timerInputOpen, setTimerInputOpen] = useState(false);
  const [timerTitle, setTimerTitle] = useState("");

  const updateTimerTitle = (e) => {
    const title = e.target.value;
    setTimerTitle(title);
  };

  const openTimerInput = () => {
    setTimerInputOpen(true);
  };

  const clearTimer = () => {
    setTimerTitle("");
    setTimerInputOpen(false);
  };

  const addTimer = (title) => {
    setTimerTitles([...timerTitles, title]);
    setTimerTitle("");
    setTimerInputOpen(false);
  };

  const deleteTimer = (title) => {
    setTimerTitles(timerTitles.filter((myTitle) => myTitle !== title));
  };

  return (
    <div className="App">
      <div>
        <h1>My Timers</h1>
        <h3>{timerTitles.length}</h3>
        <TimerList timerTitles={timerTitles} deleteTimer={deleteTimer} />
        {!timerInputOpen ? <button onClick={openTimerInput}>+</button> : null}
      </div>
      {timerInputOpen ? (
        <div>
          <h1>Add Timer</h1>
          <input value={timerTitle} onChange={(e) => updateTimerTitle(e)} />
          <button onClick={() => addTimer(timerTitle)}>Add</button>
          <button onClick={() => clearTimer()}>Cancel</button>
        </div>
      ) : null}
    </div>
  );
}
