import { useEffect, useRef, useState } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function useTime() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const intervalRef = useRef();

  useInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return currentTime;
}
