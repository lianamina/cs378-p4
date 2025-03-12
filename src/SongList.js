import React from "react";

const SongList = ({ songs }) => {
  return (
    <div className="song-list">
      {songs.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {songs.map((item) => {
            // Check if the item is a track
            if (item.album) {
              return (
                <li key={item.id} className="song-item">
                  <img src={item.album.images[0].url} alt={item.name} />
                  <div>
                    <strong>{item.name}</strong> - {item.artists[0].name}
                  </div>
                </li>
              );
            }
            // Check if the item is an album
            else if (item.images) {
              return (
                <li key={item.id} className="song-item">
                  <img src={item.images[0].url} alt={item.name} />
                  <div>
                    <strong>{item.name}</strong> - {item.artists[0].name}
                  </div>
                </li>
              );
            }
            // Fallback for unexpected data
            return null;
          })}
        </ul>
      )}
    </div>
  );
};

export default SongList;