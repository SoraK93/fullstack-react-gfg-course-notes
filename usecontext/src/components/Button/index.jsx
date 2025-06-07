import { Text } from "../Text";

// Button Component
export const Button = ({ onButtonClick }) => {
  return (
    <>
      <button onClick={onButtonClick}>Click to Increment</button>
      <Text />
    </>
  );
};
