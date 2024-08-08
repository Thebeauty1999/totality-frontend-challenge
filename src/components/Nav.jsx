

// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from './BookingContext';

const Nav = ({ user , onLogout}) => {
  const { bookings } = useBooking();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">RealEstate</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
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
          </div>

          <div className="flex items-center">
            {user ? (
              <>
                <span className="mr-4">Hello, {user.name}!</span>
                <button
                  onClick={() => onLogout()}  
                  className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="pt-2 text-white bg-green-400 h-[40px] w-[100px] text-center border rounded">
                Login
              </Link>
            )}
            <div>
            <Link to="/register" className=" ml-1 p-2 pr-4 pl-2 text-white bg-green-400 h-[30px] w-[30%] text-center border rounded">
                Register
              </Link>
          </div>
          </div>

          
        </div>
      </div>
    </nav>
  );
};

export default Nav;


