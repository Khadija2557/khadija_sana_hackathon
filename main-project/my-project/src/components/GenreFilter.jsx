import React from 'react';

export function GenreFilter({ genres, selectedGenre, onGenreChange }) {
  return (
    <select
      value={selectedGenre}
      onChange={(e) => onGenreChange(e.target.value)}
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All Genres</option>
      {genres.map(genre => (
        <option key={genre} value={genre}>{genre}</option>
      ))}
    </select>
  );
}