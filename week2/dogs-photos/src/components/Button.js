import React from "react";

const Button = ({ adding, deleting }) => {
  return (
    <div>
      <button className="btn1" onClick={adding}>Get photo</button>
      <button className="btn2" onClick={deleting}>Reset</button>
    </div>
  );
};

export default Button;
