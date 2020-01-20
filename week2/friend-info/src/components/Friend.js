import React, { useState } from "react";
import FriendProfile from "./FriendProfile";
import Button from "./Button";

const Friend = () => {
  const [friend, setFriend] = useState({});
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function getFriend() {
    setStatus("loading");
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      if (response.ok) {
        const data = await response.json();
        const [item] = data.results;
        setFriend(item);
        setStatus("success");
      } 
    } catch (err) {
      setStatus("Error");
      setErrorMessage("Some thing went wrong");
    }
  }
  return (
    <div>
      <Button btnProps={getFriend} />
      {status === "loading" && <h2>Loading...</h2>}
      {status === "Error" && <h2>{errorMessage}</h2>}
      {status === "success" && <FriendProfile friendProps={friend} />}
    </div>
  );
};

export default Friend;
