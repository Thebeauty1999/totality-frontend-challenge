

import React, { useState } from 'react';
import { useBooking } from './BookingContext';

const PropertyCard = ({ image, type, location, price, bedrooms, amenities }) => {
  const { addBooking } = useBooking();
  const [dates, setDates] = useState('');

  const handleBook = () => {
    addBooking({ image, type, location, price, bedrooms, amenities }, dates);
  };

  return (
    <div className="property-card mr-2">
      <img src={image} alt={location} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{location}</h3>
        <p>{type}</p>
        <p>{`$${price}`}</p>
        <p>{`Bedrooms: ${bedrooms}`}</p>
        <p>{`Amenities: ${amenities}`}</p>
        <input
          type="text"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          className="border p-2 mt-2 w-full"
          placeholder="Booking Dates"
        />
        <button onClick={handleBook} className="bg-blue-500 text-white px-4 py-2 mt-2 w-full">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;

