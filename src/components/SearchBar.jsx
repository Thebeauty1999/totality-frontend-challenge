import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [amenities, setAmenities] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ location, propertyType, priceRange, bedrooms, amenities });
  };

  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://cityfurnish.com/blog/wp-content/uploads/2023/06/tropical-interior-design-living-room-min.jpg')" }}>
         <div className="p-4">
        <h1 className="text-6xl  text-white font-bold ml-5">Welcome to RealEstate</h1>
        <p className='text-white text-3xl ml-5'>Your dream home is just a click away.</p>
      </div>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-10 flex justify-center items-center h-full">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-5xl">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Find Your Dream Home</h2>
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Location</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Property Type</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="">Select property type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Price Range</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter price range"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Bedrooms</label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter number of bedrooms"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Amenities</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter amenities"
                value={amenities}
                onChange={(e) => setAmenities(e.target.value)}
              />
            </div>
            <div className="md:col-span-3 text-center">
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition duration-300">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
