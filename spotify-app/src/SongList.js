import React from "react";

const SongList = ({ songs }) => {
  return (
    <div className="song-list">
      {songs.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {songs.map((song) => (
            <li key={song.id} className="song-item">
              <img src={song.album.images[0].url} alt={song.name} />
              <strong>{song.name}</strong> - {song.artists[0].name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SongList;
