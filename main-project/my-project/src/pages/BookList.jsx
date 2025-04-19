import React, { useState, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar';
import { GenreFilter } from '../components/GenreFilter';
import { BookCard } from '../components/BookCard';
import { AddBookModal } from '../components/AddBookModal';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { booksData } from '../data/books';
import { PlusIcon } from '@heroicons/react/24/outline';

export function BookList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [books, setBooks] = useLocalStorage('books', booksData);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const genres = [...new Set(books.map(book => book.genre))];

  const filteredBooks = books
    .filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(book => selectedGenre ? book.genre === selectedGenre : true)
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'year':
          return b.year - a.year;
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const toggleFavorite = (book) => {
    setFavorites(prev => {
      const isFavorite = prev.find(f => f.id === book.id);
      if (isFavorite) {
        return prev.filter(f => f.id !== book.id);
      }
      return [...prev, book];
    });
  };

  const handleAddBook = (newBook) => {
    setBooks(prev => [...prev, newBook]);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Book Collection</h1>
          <p className="text-gray-500">Manage and explore your digital library</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <PlusIcon className="w-5 h-5" />
          Add New Book
        </button>
      </div>

      <div className="mb-8">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div className="flex gap-4 mt-4">
          <GenreFilter
            genres={genres}
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="title">Sort by Title</option>
            <option value="rating">Sort by Rating</option>
            <option value="year">Sort by Year</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredBooks.map(book => (
          <BookCard
            key={book.id}
            book={book}
            onToggleFavorite={toggleFavorite}
            isFavorite={favorites.some(f => f.id === book.id)}
          />
        ))}
      </div>

      <AddBookModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddBook}
      />
    </div>
  );
}