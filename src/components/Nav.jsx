


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from './BookingContext';

const Nav = ({ user, onLogout }) => {
  const { bookings } = useBooking();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">RealEstate</span>
              </Link>
            </div>
          </div>

        
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

        
          <div className={`hidden md:flex items-center space-x-1`}>
            <Link to="/" className="py-4 px-2 text-green-500 hover:border-b-4 border-green-500 font-semibold">Home</Link>
            <Link to="/propertylist" className="py-4 px-2 text-gray-500 hover:border-b-4 border-green-500 font-semibold hover:text-green-500 transition duration-300">Listings</Link>
            <Link to="/about" className="py-4 px-2 text-gray-500 hover:border-b-4 border-green-500 font-semibold hover:text-green-500 transition duration-300">About</Link>
            <Link to="/contact" className="py-4 px-2 text-gray-500 hover:border-b-4 border-green-500 font-semibold hover:text-green-500 transition duration-300">Contact</Link>

            <div className="relative">
              <Link to="/cart" className="py-4 px-2 text-gray-500 font-semibold hover:border-b-4 border-green-500 hover:text-green-500 transition duration-300">
                Cart
              </Link>
              {bookings.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {bookings.length}
                </span>
              )}
            </div>
          </div>

          
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-500">Hello, {user.name}!</span>
                <button
                  onClick={onLogout}  
                  className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition duration-200">
                  Login
                </Link>
                <Link to="/register" className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition duration-200">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <Link to="/" className="block py-2 px-4 text-sm text-gray-500">Home</Link>
        <Link to="/propertylist" className="block py-2 px-4 text-sm text-gray-500">Listings</Link>
        <Link to="/about" className="block py-2 px-4 text-sm text-gray-500">About</Link>
        <Link to="/contact" className="block py-2 px-4 text-sm text-gray-500">Contact</Link>
        <Link to="/cart" className="block py-2 px-4 text-sm text-gray-500">Cart</Link>
        {user ? (
          <>
            <span className="block py-2 px-4 text-sm text-gray-500">Hello, {user.name}!</span>
            <button
              onClick={onLogout}
              className="block w-full text-left py-2 px-4 text-sm text-white bg-green-500 hover:bg-green-600 transition duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="block w-full text-left py-2 px-4 text-sm text-white bg-green-500 hover:bg-green-600 transition duration-200">
              Login
            </Link>
            <Link to="/register" className="block w-full text-left py-2 px-4 text-sm text-white bg-green-500 hover:bg-green-600 transition duration-200">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
