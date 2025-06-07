import "./App.css";
import { Button } from "./components/Button";
import { useCount } from "./context/count-context";

function App() {

  const {count, setCount} = useCount();

  const onButtonClick = () => {
    setCount(count + 1)
  };

  return (
    <div className="App">
      <Button onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
