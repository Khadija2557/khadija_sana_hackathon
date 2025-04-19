import React from 'react';
import { BookCard } from '../components/BookCard';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function FavoritesList() {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const toggleFavorite = (book) => {
    setFavorites(prev => prev.filter(f => f.id !== book.id));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Favorite Books</h1>
      {favorites.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl text-gray-600">No favorite books yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onToggleFavorite={toggleFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}