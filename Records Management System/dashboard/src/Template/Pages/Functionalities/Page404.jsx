import React from 'react'
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-40 h-40 text-red-700 mx-auto"
                >
                    <path d="M9 9L15 15M15 9L9 15M21 12A9 9 0 1 1 3 12A9 9 0 0 1 21 12z" />
                </svg>
                <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">
                    Oops! The page you’re looking for doesn’t exist.
                </p>
                <Link
                    to="/login"
                    className="px-6 py-3 cursor-pointer text-lg no-underline bg-yellow-500 text-white rounded hover:bg-amber-600 transition-all"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}

export default Page404
