import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [joke, setJoke] = useState("");
  const [fade, setFade] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch a random joke from the API
  const fetchJoke = async () => {
    const url =
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setJoke(data.joke);
      setFade(true);
    } catch (error) {
      console.error("Error fetching joke:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to get a new random joke
  const getJoke = () => {
    setFade(false);
    fetchJoke();
  };

  // Fetch a joke on component mount
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="wrapper">
      <span role="img" aria-label="laughing emoji">
        😆
      </span>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <p className={fade ? "fade" : ""}>{joke}</p>
      )}
      <button onClick={getJoke} disabled={loading}>
        Get Random Joke
      </button>
    </div>
  );
};

export default App;