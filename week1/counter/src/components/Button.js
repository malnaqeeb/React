import React from "react";

const Button = ({ addProps, resetProps }) => {
  return (
    <div>
      <button onClick={addProps} className='btn'> Add 1!</button>
      <button onClick={resetProps} className='btn'> Reset </button>
    </div>
  );
};

export default Button;
