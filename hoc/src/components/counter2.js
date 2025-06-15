import { HigherOrderComponent } from "./hoc";


const Counter2 = ({handleClick, count}) => {
  return (
    <>
      <span>Counter 2:::</span>
      <button onClick={handleClick}>Clicked - {count} times</button>
    </>
  );
};

export default HigherOrderComponent(Counter2);
