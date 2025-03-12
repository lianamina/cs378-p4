import axios from 'axios';

const CLIENT_ID = "080efc3515834107aa2c09e0300a3673";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPES = [
    "user-read-private", // Default
    "user-top-read", // Required for top tracks
    "user-library-read", // Required for saved tracks
];

export const getAuthUrl = () => {
  return `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join("%20")}&response_type=${RESPONSE_TYPE}`;
};

export const getAccessToken = () => {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  return params.get("access_token");
};

export const fetchSongs = async (query, token) => {
  const response = await axios.get(`https://api.spotify.com/v1/search`, {
    headers: { Authorization: `Bearer ${token}` },
    params: { q: query, type: "track", limit: 10 },
  });
  return response.data.tracks.items;
};

export const fetchTopTracks = async (token) => {
    const response = await axios.get(`https://api.spotify.com/v1/me/top/tracks`, {
      headers: { Authorization: `Bearer ${token}` },
      params: { limit: 10, time_range: "short_term" },
    });
    return response.data.items;
  };
  
  export const fetchSavedTracks = async (token) => {
    const response = await axios.get(`https://api.spotify.com/v1/me/tracks`, {
      headers: { Authorization: `Bearer ${token}` },
      params: { limit: 10 },
    });
    return response.data.items.map((item) => item.track);
  };
  
  export const fetchNewReleases = async (token) => {
    const response = await axios.get(`https://api.spotify.com/v1/browse/new-releases`, {
      headers: { Authorization: `Bearer ${token}` },
      params: { limit: 10 },
    });
    return response.data.albums.items;
  };
