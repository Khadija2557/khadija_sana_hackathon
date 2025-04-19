import React from 'react';
import { StarIcon as StarIconSolid } from '@heroicons/react/20/solid';

export function BookHeader({ title, author, rating, pages }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="text-xl text-gray-600 mt-2">{author}</p>
      <div className="flex items-center mt-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <StarIconSolid
              key={i}
              className={`h-5 w-5 ${
                i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-200'
              }`}
            />
          ))}
        </div>
        <span className="ml-2 text-gray-600">({rating.toFixed(1)}) | {pages} pages</span>
      </div>
    </div>
  );
}