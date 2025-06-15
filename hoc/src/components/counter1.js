import { HigherOrderComponent } from "./hoc";

const Counter1 = ({handleClick, count}) => {
  return (
    <>
      <span>Counter 1:::</span>
      <button onClick={handleClick}>Clicked - {count} times</button>
    </>
  );
};

export default HigherOrderComponent(Counter1);
