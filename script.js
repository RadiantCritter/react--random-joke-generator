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
  
  // Fetch a joke on component mount
  useEffect(() => {
    fetchJoke();
  }, []);