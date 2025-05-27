import React from "react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-4">Oops! Page not found.</p>
        <p className="text-gray-500 mt-2">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
