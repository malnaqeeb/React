import React from "react";

const Joke = ({ propsJoke }) => {
  return (
    <div>
      <h3>{propsJoke.setup}</h3>
      <p>{propsJoke.punchline}</p>
    </div>
  );
};

export default Joke;
