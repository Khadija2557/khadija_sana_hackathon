import React from 'react';

export function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}