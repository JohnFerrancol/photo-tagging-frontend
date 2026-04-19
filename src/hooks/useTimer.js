import { useState, useEffect, useRef } from 'react';

const useTimer = (isRunning) => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 0.1);
      }, 100);
    }

    // cleanup when stopped or unmounted
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const reset = () => setTime(0);

  return { time, setTime, reset };
};

export default useTimer;
