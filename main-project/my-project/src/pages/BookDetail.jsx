import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/20/solid';
import { ReviewForm } from '../components/ReviewForm';
import { BookHeader } from '../components/BookHeader';
import { BookMetadata } from '../components/BookMetadata';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function BookDetail() {
  const { id } = useParams();
  const [books] = useLocalStorage('books', []);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const foundBook = books.find(b => b.id === parseInt(id));
      setBook(foundBook);
      setLoading(false);
    }, 1000);
  }, [id, books]);

  const handleAddReview = (newReview) => {
    setBook(prev => ({
      ...prev,
      reviews: [...prev.reviews, newReview],
      rating: (prev.reviews.reduce((acc, r) => acc + r.rating, 0) + newReview.rating) / (prev.reviews.length + 1)
    }));
  };

  const toggleFavorite = () => {
    setFavorites(prev => {
      const isFavorite = prev.find(f => f.id === book.id);
      if (isFavorite) {
        return prev.filter(f => f.id !== book.id);
      }
      return [...prev, book];
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Book not found</h2>
        <Link to="/books" className="text-blue-500 hover:underline">Back to Books</Link>
      </div>
    );
  }

  const isFavorite = favorites.some(f => f.id === book.id);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <Link to="/books" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Back to Library
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
          <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="flex justify-between items-start">
            <BookHeader
              title={book.title}
              author={book.author}
              rating={book.rating}
              pages={180}
            />
            <div className="flex gap-2">
              <button
                onClick={toggleFavorite}
                className="p-2 rounded-full hover:bg-gray-100"
                title={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                {isFavorite ? (
                  <StarIconSolid className="w-6 h-6 text-yellow-400" />
                ) : (
                  <StarIcon className="w-6 h-6 text-gray-400" />
                )}
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ShareIcon className="w-6 h-6 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <BookMetadata label="Genre" value={book.genre} />
            <BookMetadata label="Published" value={book.year} />
            <BookMetadata 
              label="Status" 
              value={book.status} 
              className={book.status === 'Available' ? 'text-green-600' : 'text-yellow-600'}
            />
            <BookMetadata label="Loan Period" value="14 days" />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-gray-600 leading-relaxed">{book.description}</p>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700">
              Borrow Book
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              Add to Reading List
            </button>
          </div>

          <div className="border-t pt-6 mt-8">
            <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm text-gray-500">ISBN</dt>
                <dd className="text-gray-900">{book.isbn || '978-0743273565'}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Publisher</dt>
                <dd className="text-gray-900">{book.publisher || 'Scribner'}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Language</dt>
                <dd className="text-gray-900">{book.language || 'English'}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Edition</dt>
                <dd className="text-gray-900">{book.edition || 'First Edition'}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Reviews</h2>
        <div className="grid grid-cols-1 gap-6">
          {book.reviews.map(review => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-gray-900">{review.user}</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIconSolid
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Add a Review</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <ReviewForm onSubmit={handleAddReview} />
        </div>
      </div>
    </div>
  );
}