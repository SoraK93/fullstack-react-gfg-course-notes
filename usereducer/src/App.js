import './App.css';
import { useReducer, useState } from 'react';
import { countReducer } from './useReducer/countReducer';

function App() {

  const initialState = {
    count: 0,
  };

  const [count, countDispatch] = useReducer(countReducer, initialState);

  const onDecClick = () => {
    countDispatch({type: "DECREMENT", payload: "1234"})
  };

  return (
    <div className="App">
      <h2>{count.count}</h2>
      <button onClick={() => countDispatch({type: "INCREMENT", payload: "1234"})}>Increment</button>
      <button onClick={onDecClick}>Decrement</button>
    </div>
  );
}

export default App;
