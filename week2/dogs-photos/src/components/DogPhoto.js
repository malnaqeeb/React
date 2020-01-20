import React from "react";

const DogPhoto = ({ dog }) => {
  return (
    <li className="list-item">
      <img className="image" src={dog.message} alt={""} />
    </li>
  );
};

export default DogPhoto;
