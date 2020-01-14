import React from "react";

const Guarantee = ({ img, title, description }) => {
  return (
 
        <li className='list-item' >
          <img src={img} alt={title} className='image'/>
          <h3>{title}</h3>
          <p>{description} </p>
        </li>
   
  );
};

export default Guarantee;
