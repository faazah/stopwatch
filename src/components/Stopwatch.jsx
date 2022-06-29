import { useEffect, useState } from "react";
import "./style.css";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="Timers">
      <h1>Stopwatch</h1>
      <div id="display">
        <h2>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </h2>
      </div>
      <div id="buttons">
        {!timerOn && time === 0 && (
          <button
            onClick={() => {
              setTimerOn(true);
            }}
          >
            Start
          </button>
        )}

        {timerOn && (
          <button
            onClick={() => {
              setTimerOn(false);
            }}
          >
            Stop
          </button>
        )}

        {!timerOn && time !== 0 && (
          <button
            onClick={() => {
              setTimerOn(true);
            }}
          >
            Resume
          </button>
        )}

        {!timerOn && time > 0 && (
          <button
            onClick={() => {
              setTime(0);
            }}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};
