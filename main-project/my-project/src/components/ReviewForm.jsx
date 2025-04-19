import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';

export function ReviewForm({ onSubmit }) {
  const [review, setReview] = useState({ user: '', comment: '', rating: 5 });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...review, id: Date.now() });
    setReview({ user: '', comment: '', rating: 5 });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={review.user}
          onChange={(e) => setReview({ ...review, user: e.target.value })}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Rating</label>
        <div className="flex gap-1 mt-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setReview({ ...review, rating: star })}
              className="focus:outline-none"
            >
              <StarIcon
                className={`h-6 w-6 ${
                  star <= review.rating ? 'text-yellow-500' : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Comment</label>
        <textarea
          value={review.comment}
          onChange={(e) => setReview({ ...review, comment: e.target.value })}
          required
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit Review
      </button>
    </form>
  );
}