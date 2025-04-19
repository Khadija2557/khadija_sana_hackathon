import React from 'react';

export function BookMetadata({ label, value, className = '' }) {
  return (
    <div className={`bg-gray-50 p-4 rounded-lg ${className}`}>
      <span className="text-sm text-gray-500">{label}</span>
      <p className="font-medium text-gray-900">{value}</p>
    </div>
  );
}