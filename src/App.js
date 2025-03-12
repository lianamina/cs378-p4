import React, { useState, useEffect } from "react";
import { getAuthUrl, getAccessToken, fetchSongs, fetchTopTracks, fetchSavedTracks, fetchNewReleases } from "./spotifyApi";
import SearchBar from "./SearchBar";
import SongList from "./SongList";
import Chart from "./Chart";
import "./index.css";

const App = () => {
  const [token, setToken] = useState(null);
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState("");
  const [dataType, setDataType] = useState("");

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
      setDataType("search");
      setError("");
    } catch (err) {
      setError("Failed to fetch songs. Try again.");
    }
  };

  const handleTopTracks = async () => {
    if (!token) return;
    try {
      const data = await fetchTopTracks(token);
      setSongs(data);
      setDataType("topTracks");
      setError("");
    } catch (err) {
      setError("Failed to fetch top tracks. Try again.");
    }
  };

  const handleSavedTracks = async () => {
    if (!token) return;
    try {
      const data = await fetchSavedTracks(token);
      setSongs(data);
      setDataType("savedTracks");
      setError("");
    } catch (err) {
      setError("Failed to fetch saved tracks. Try again.");
    }
  };

  const handleNewReleases = async () => {
    if (!token) return;
    try {
      const data = await fetchNewReleases(token);
      setSongs(data);
      setDataType("newReleases");
      setError("");
    } catch (err) {
      setError("Failed to fetch new releases. Try again.");
    }
  };

  return (
    <div className="container">
      <h1>Spotify Search</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="button-container">
        <button onClick={handleTopTracks}>Top Tracks</button>
        <button onClick={handleSavedTracks}>Saved Tracks</button>
        <button onClick={handleNewReleases}>New Releases</button>
      </div>
      {error && <p className="error">{error}</p>}
      <SongList songs={songs} />
      {dataType === "search" && songs.length > 0 && <Chart songs={songs} />} {/* Render Chart only for search results */}
    </div>
  );
};

export default App;