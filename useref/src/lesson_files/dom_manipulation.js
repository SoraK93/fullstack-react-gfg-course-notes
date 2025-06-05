import "../App.css";
import { useRef, forwardRef } from "react";

const MyButton = forwardRef((props, ref) => {
  console.log(props, ref);
  return <input ref={ref} placeholder={props.placeholder} name={props.name} />;
});

function Dom() {
  const inputRef = useRef();

  const onFocusClick = () => {
    inputRef.current.focus();
  };
  console.log(inputRef);

  return (
    <>
      {/* <input ref={inputRef} placeholder="Search..." /> */}
      <MyButton
        ref={inputRef}
        placeholder="Search something..."
        name="focusSearch"
      />
      <button onClick={onFocusClick}>Focus on Input</button>
    </>
  );
}

export default Dom;
