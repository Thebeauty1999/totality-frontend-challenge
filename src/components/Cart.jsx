
import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from './BookingContext';

const Cart = () => {
  const { bookings, removeBooking } = useBooking();

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
      {bookings.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <ul>
            {bookings.map((booking, index) => (
              <li key={index} className="flex items-center justify-between mb-4 border-b pb-4">
                <img src={booking.image} alt={booking.type} className="w-32 h-20 object-cover mr-4 rounded" />
                <div className="flex-1">
                  <p className="font-bold">{booking.type}</p>
                  <p>{booking.location}</p>
                  <p className="text-green-500">${booking.price}</p>
                  <p className="text-sm text-gray-600">Dates: {booking.dates}</p>
                </div>
                <button
                  onClick={() => removeBooking(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <Link
            to="/checkout"
            className="w-full block mt-4 bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-400 transition duration-300"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
