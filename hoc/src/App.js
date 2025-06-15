import "./App.css";
import Counter1 from "../src/components/counter1";
import Counter2 from "../src/components/counter2";
import { useState, memo } from "react";

const Greetings = memo(function Greetings({ name }) {
  console.log("component re-rendered", name);
  let visibility = name === "" ? "hidden" : "";
  return <h1 style={{ visibility }}>Hello {name}, Welcome to GFG!!!</h1>;
});

function App() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="App">
      <h1>Higher Order Components</h1>
      <div>
        <Counter1 />
      </div>
      <div>
        <Counter2 />
      </div>
      <h1>Memoization</h1>
      <div>
        <input
          placeholder="name"
          name={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="city"
          name={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <Greetings name={name} />
    </div>
  );
}

export default App;
