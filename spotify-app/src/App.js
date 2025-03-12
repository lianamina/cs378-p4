import React, { useState, useEffect } from "react";
import { getAuthUrl, getAccessToken, fetchSongs } from "./spotifyApi";
import SearchBar from "./SearchBar";
import SongList from "./SongList";
import Chart from "./Chart";
import "./index.css";

const App = () => {
  const [token, setToken] = useState(null);
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      setToken(token);
    } else {
      window.location.href = getAuthUrl();
    }
  }, []);

  const handleSearch = async (query) => {
    if (!token) return;
    try {
      const data = await fetchSongs(query, token);
      setSongs(data);
      setError("");
    } catch (err) {
      setError("Failed to fetch songs. Try again.");
    }
  };

  return (
    <div className="container">
      <h1>Spotify Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      <SongList songs={songs} />
      {songs.length > 0 && <Chart songs={songs} />}
    </div>
  );
};

export default App;
