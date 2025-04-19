import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

export function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-indigo-600 font-bold text-2xl">BookHaven</span>
        </div>
        <nav className="space-y-2">
          <Link
            to="/"
            className={classNames(
              "flex items-center gap-3 px-4 py-3 rounded-lg w-full",
              isActive('/') ? "bg-indigo-50 text-indigo-600" : "text-gray-600 hover:bg-gray-50"
            )}
          >
            <HomeIcon className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link
            to="/books"
            className={classNames(
              "flex items-center gap-3 px-4 py-3 rounded-lg w-full",
              isActive('/books') ? "bg-indigo-50 text-indigo-600" : "text-gray-600 hover:bg-gray-50"
            )}
          >
            <BookOpenIcon className="w-5 h-5" />
            <span>Books</span>
          </Link>
          <Link
            to="/settings"
            className={classNames(
              "flex items-center gap-3 px-4 py-3 rounded-lg w-full",
              isActive('/settings') ? "bg-indigo-50 text-indigo-600" : "text-gray-600 hover:bg-gray-50"
            )}
          >
            <Cog6ToothIcon className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}