import React from "react";

const Count = ({ countProps, feedback }) => {
  return (
    <div>
      Counter : {countProps} || {feedback}
    </div>
  );
};

export default Count;
