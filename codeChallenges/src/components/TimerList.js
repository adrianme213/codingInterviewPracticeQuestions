import React from "react";
import Timer from "./Timer";

const TimerList = ({ timerTitles, deleteTimer }) => {
  const content = timerTitles.map((title, idx) => {
    return (
      <div key={idx}>
        <Timer title={title} deleteTimer={deleteTimer} />
      </div>
    );
  });

  return <div>{content}</div>;
};

export default TimerList;
