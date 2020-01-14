import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";

const Counter = () => {
  const [count, setCount] = useState(0);

  function addOne() {
    return setCount(count + 1);
  }
  
  function reset() {
    return setCount(0);
  }

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting";

  return (
    <div>
      <Button addProps={addOne} resetProps={reset} />
      <Count feedback={feedback} countProps={count} />
    </div>
  );
};

export default Counter;
