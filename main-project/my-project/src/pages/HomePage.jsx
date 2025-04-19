import React from 'react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to BookHaven</h1>
      <div className="text-center space-y-6">
        <p className="text-xl text-gray-600">
          Your digital sanctuary for literary exploration.
        </p>
        <div className="space-x-4">
          <Link
            to="/books"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Browse Books
          </Link>
          <Link
            to="/favorites"
            className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600"
          >
            View Favorites
          </Link>
        </div>
      </div>
    </div>
  );
}