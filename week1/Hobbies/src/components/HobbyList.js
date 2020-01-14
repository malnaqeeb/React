import React from "react";
import Hobbies from "./Hobbies";
import uuid from "uuid";

const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing"
  ];
  return (
    <ul className='list-items'>
      {hobbies.map(hobby => (
        <li key={uuid()}>
          <Hobbies hobbyProps={hobby} />
        </li>
      ))}
    </ul>
  );
};

export default HobbyList;
