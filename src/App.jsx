
// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import PropertyList from './components/PropertyList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './pages/Login';
import { BookingProvider } from './components/BookingContext';
import PropertyType from './components/PropertyType';
import Register from './components/Register';

function App() {
  const [filters, setFilters] = useState({});
  const [user, setUser] = useState(null);

  const handleSearch = (searchFilters) => {
    setFilters(searchFilters);
  };

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BookingProvider>
      <Router>
        <div>
          <Nav user={user} onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<><SearchBar onSearch={handleSearch} /><PropertyType/><PropertyList filters={filters} /></>} />
            <Route path="/propertylist" element={<PropertyList filters={filters} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register/>} />
          
            
           
            
          </Routes>
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;
