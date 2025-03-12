import React from "react";

const SongList = ({ songs }) => {
  return (
    <div className="p-4">
      {songs.length === 0 ? <p>No results found.</p> : (
        <ul>
          {songs.map((song) => (
            <li key={song.id} className="border-b p-2">
              <img src={song.album.images[0].url} alt={song.name} width="50" />
              <strong>{song.name}</strong> - {song.artists[0].name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SongList;
