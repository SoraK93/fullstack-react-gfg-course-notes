import '../App.css';
import { useRef } from 'react';
import { useState } from 'react';

function Intro() {
  
  const [ count, setCount ] = useState(0);
  let timerRef = useRef();

  const onStartClick = () => {
    timerRef.current = setInterval(() => {
      setCount(count => count+1)
    }, 1000);
  };

  const onStopClick = () => {
    clearInterval(timerRef.current);
  };

  return (  
    <>
      <p>Count - {count} seconds</p>
      <button onClick={onStartClick}>Start</button>
      <button onClick={onStopClick}>Stop</button>
    </>
  );
}

export default Intro;
