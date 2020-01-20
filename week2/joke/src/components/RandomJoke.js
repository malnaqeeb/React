import React, { useState, useEffect } from "react";
import Joke from "./Joke";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setLoading] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setLoading('loading')
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setLoading("success");
        setJoke(data);
      })
      .catch(error => {
        setLoading("error");
        setErrorMessage("Some thing went wrong");
      });
  }, []);

  return (
    <div>
      {isLoading === "loading" && <h1>Loading...</h1>}
      {isLoading === "error" && <h1>{errorMessage}</h1>}
      {isLoading === "success" && <Joke propsJoke={joke} />}
    </div>
  );
};

export default RandomJoke;
