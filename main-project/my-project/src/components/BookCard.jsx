import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

export function BookCard({ book, onToggleFavorite, isFavorite }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100">
      <Link to={`/books/${book.id}`} className="block">
        <div className="aspect-[3/4] relative bg-gray-100">
          <img 
            src={book.coverImage} 
            alt={book.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-gray-900">{book.title}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>
              <p className="text-sm text-gray-500">{book.year}</p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                onToggleFavorite(book);
              }}
              className={classNames(
                "p-1 rounded-full transition-colors",
                isFavorite ? "text-yellow-500" : "text-gray-300 hover:text-gray-400"
              )}
            >
              <StarIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={classNames(
                  "h-4 w-4",
                  i < Math.round(book.rating) ? "text-yellow-500" : "text-gray-200"
                )}
              />
            ))}
            <span className="text-sm text-gray-500 ml-1">({book.rating.toFixed(1)})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full">
              {book.genre}
            </span>
            <span className={classNames(
              "text-xs px-2 py-1 rounded-full",
              book.status === "Available" ? "bg-green-50 text-green-600" : "bg-yellow-50 text-yellow-600"
            )}>
              {book.status}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}