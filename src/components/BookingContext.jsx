import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (property, dates) => {
    setBookings((prev) => [...prev, { ...property, dates }]);
  };

  const removeBooking = (index) => {
    setBookings((prev) => prev.filter((_, i) => i !== index));
  };

  const updateBooking = (index, dates) => {
    setBookings((prev) =>
      prev.map((booking, i) => (i === index ? { ...booking, dates } : booking))
    );
  };

  const clearBookings = () => setBookings([]);

  return (
    <BookingContext.Provider value={{ bookings, addBooking, removeBooking, updateBooking, clearBookings }}>
      {children}
    </BookingContext.Provider>
  );
};
