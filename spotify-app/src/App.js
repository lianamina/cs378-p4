import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";
import { getAuthUrl, getAccessToken, fetchSongs } from "./spotifyApi";
import SearchBar from "./SearchBar";
import SongList from "./SongList";
import Chart from "./Chart";

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
    <div className="p-8">
      <h1 className="text-2xl">Spotify Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      <SongList songs={songs} />
      {songs.length > 0 && <Chart songs={songs} />}
    </div>
  );
};

export default App;
