import React, { useState } from 'react';
import { useBooking } from './BookingContext';

const Checkout = () => {
  const { bookings, clearBookings } = useBooking();
  const [contactInfo, setContactInfo] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');
  const [error, setError] = useState('');

  
  const totalCost = bookings.reduce((sum, booking) => sum + booking.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();  
    if (!contactInfo || !paymentInfo) {
      setError('Please fill out all fields.');
      return;
    }
    
    alert('Booking confirmed!'); 
    clearBookings();
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>
      {bookings.length === 0 ? (
        <p className="text-center text-lg">No bookings to checkout.</p>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Booking Summary</h3>
          <ul className="mb-4">
            {bookings.map((booking, index) => (
              <li key={index} className="mb-2 border-b pb-2">
                <img src={booking.image} alt={booking.type} className="w-full h-40 object-cover mb-2 rounded" />
                <p className="font-bold">{booking.type}</p>
                <p>{booking.location}</p>
                <p className="text-green-500">${booking.price}</p>
                <p className="text-sm text-gray-600">Dates: {booking.dates}</p>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold mb-4">
            <span>Total Cost:</span>
            <span>${totalCost}</span>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Contact Information</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your contact information"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Payment Information</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your payment details"
                value={paymentInfo}
                onChange={(e) => setPaymentInfo(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition duration-300"
            >
              Complete Booking
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
