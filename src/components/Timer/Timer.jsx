import React, { useEffect, useRef, useState } from 'react';
import './Timer.css';

const Timer = ({ duration = 60, onExit }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef(null);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const progress = ((duration - timeLeft) / duration) * circumference;

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsRunning(false);
      setIsFinished(true);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    setIsRunning(true);
    setIsFinished(false);
  };

  const handlePause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleExit = () => {
    setIsRunning(false);
    setTimeLeft(duration);
    setIsFinished(false);
    if (onExit) onExit();
  };

  return (
    <div className="timer-container">
      <svg width="160" height="160">
        <circle
          className="timer-bg"
          cx="80"
          cy="80"
          r={radius}
        />
        <circle
          className="timer-progress"
          cx="80"
          cy="80"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="timer-text">
          {timeLeft}s
        </text>
      </svg>

      <div className="timer-buttons">
        {!isRunning && !isFinished && timeLeft === duration && (
          <button onClick={handleStart}>Start</button>
        )}
        {isRunning && <button onClick={handlePause}>Pause</button>}
        {!isRunning && timeLeft !== duration && !isFinished && (
          <button onClick={handleStart}>Resume</button>
        )}
        {isFinished && <span className="done-text">Time's up!</span>}
        <button onClick={handleExit}>Exit</button>
      </div>
    </div>
  );
};

export default Timer;
