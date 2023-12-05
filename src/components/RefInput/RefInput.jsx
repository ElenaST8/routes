import { useRef } from "react";
import { useParams } from "react-router-dom";

const RefInput = () => {
  const inputRef = useRef(null);
  // const textRef = useRef("some text");

  const params = useParams();
  console.log(params);

  // console.log(textRef.current);

  return (
    <label>
      Ref Input
      <input ref={inputRef} id="inputRef" type="text" />
    </label>
  );
};

export default RefInput;
