import React, { useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setLoading] = useState("");
  const [status, setStatus] = useState(
    "Get your first dog by clicking the button!"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function getDogPhoto() {
    setLoading("loading");
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (response.ok) {
        const photo = await response.json();
        photo.id = Math.random();
        setLoading("success");
        setStatus("click and get more ");
        setDogPhotos([photo, ...dogPhotos]);
      }
    } catch (err) {
      setLoading("error");
      setErrorMessage("Oops!!! something went wrong.");
    }
  }
  function reset() {
    setDogPhotos([]);
    setStatus("Get your first dog by clicking the button!");
  }
  return (
    <div>
      <h3>{status}</h3>
      <Button adding={getDogPhoto} deleting={reset} />
      {isLoading === "loading" && <h2>Loading... please wait</h2>}
      {isLoading === "error" && <h2>{errorMessage}</h2>}
      {isLoading === "success" && (
        <ul>
          {dogPhotos.map(el => (
            <DogPhoto dog={el} key={el.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default DogGallery;
