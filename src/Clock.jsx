import React from 'react';
import useTime from './useTime';

export default function Clock() {
  const currentTime = useTime();

  const formatTime = (time) => {
    return time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  };

  return (
    <div>
      <h1>{formatTime(currentTime)}</h1>
    </div>
  );
}
