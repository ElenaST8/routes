import { useEffect, useRef } from "react";

const RefInput = () => {
  const inputRef = useRef(null);
  const textRef = useRef("some text");

  console.log(textRef.current);

  return (
    <label>
      Ref Input
      <input ref={inputRef} id="inputRef" type="text" />
    </label>
  );
};

export default RefInput;
