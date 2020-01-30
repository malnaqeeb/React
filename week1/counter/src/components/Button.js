import React from "react";

const Button = ({ add, reset }) => {
  return (
    <div>
      <button onClick={add} className='btn'> Add 1!</button>
      <button onClick={reset} className='btn'> Reset </button>
    </div>
  );
};

export default Button;
