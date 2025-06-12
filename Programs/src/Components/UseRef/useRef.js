import { useRef } from "react";

const InputFocus = () => {
  const refObj = useRef("Hiii");

  const handleOnClick = () => {
    // refObj.current = "Hello";
    refObj.current.focus();
  };
  
  return (
    <div>
      <input ref={refObj} type="text" placeholder="Please Enter Name" />
      <button onClick={handleOnClick}>Click Me</button>
    </div>
  );
};

export default InputFocus;
