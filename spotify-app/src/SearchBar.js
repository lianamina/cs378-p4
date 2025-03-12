import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a song..."
        className="border p-2 w-full"
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
