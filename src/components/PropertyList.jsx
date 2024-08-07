
import React, { useState } from 'react';
import PropertyCard from './PropertyCard';

const initialProperties = [
  {
    image: 'https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    type: 'House',
    location: '123 Main St, Anytown, USA',
    price: 250000,
    bedrooms: 3,
    amenities: 'Garage, Pool',
  },
  {
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'Apartment',
    location: '456 Elm St, Anytown, USA',
    price: 150000,
    bedrooms: 2,
    amenities: 'Gym, Park',
  },
  {
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    type: 'House',
    location: '789 Pine St, Anytown, USA',
    price: 300000,
    bedrooms: 4,
    amenities: 'Backyard, Fireplace',
  },
  {
    image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxyZWFsJTIwZXN0YXRlJTIwaG91c2VzfGVufDB8fDB8fHww',
    type: 'Condo',
    location: '101 Maple Ave, Anytown, USA',
    price: 200000,
    bedrooms: 3,
    amenities: 'Balcony, Pool',
  },
  {
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHJlYWwlMjBlc3RhdGUlMjBob3VzZXN8ZW58MHx8MHx8fDA%3D',
    type: 'Apartment',
    location: '202 Oak St, Anytown, USA',
    price: 180000,
    bedrooms: 2,
    amenities: 'Gym, Garden',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHJlYWwlMjBlc3RhdGUlMjBob3VzZXN8ZW58MHx8MHx8fDA%3D',
    type: 'House',
    location: '303 Birch Rd, Anytown, USA',
    price: 400000,
    bedrooms: 5,
    amenities: 'Garage, Pool, Garden',
  },
  {
    image: 'https://images.unsplash.com/photo-1472224371017-08207f84aaae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHJlYWwlMjBlc3RhdGUlMjBob3VzZXN8ZW58MHx8MHx8fDA%3D',
    type: 'Condo',
    location: '404 Cedar St, Anytown, USA',
    price: 220000,
    bedrooms: 3,
    amenities: 'Balcony, Gym',
  },
  {
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHJlYWwlMjBlc3RhdGUlMjBob3VzZXN8ZW58MHx8MHx8fDA%3D',
    type: 'Apartment',
    location: '505 Walnut St, Anytown, USA',
    price: 160000,
    bedrooms: 1,
    amenities: 'Park, Pool',
  },
  {
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHJlYWwlMjBlc3RhdGUlMjBob3VzZXN8ZW58MHx8MHx8fDA%3D',
    type: 'House',
    location: '606 Spruce St, Anytown, USA',
    price: 350000,
    bedrooms: 4,
    amenities: 'Fireplace, Garage',
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGUlMjBob3VzZXN8ZW58MHx8MHx8fDA%3D',
    type: 'Condo',
    location: '707 Cherry St, Anytown, USA',
    price: 275000,
    bedrooms: 3,
    amenities: 'Balcony, Gym, Pool',
  },
  {
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'House',
    location: '808 Ash St, Anytown, USA',
    price: 320000,
    bedrooms: 4,
    amenities: 'Garage, Fireplace, Pool',
  },
  {
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHJlYWwlMjBlc3RhdGUlMjBob3VzZXN8ZW58MHx8MHx8fDA%3D',
    type: 'Apartment',
    location: '909 Birch Ave, Anytown, USA',
    price: 140000,
    bedrooms: 2,
    amenities: 'Gym, Park, Pool',
  },
];


const PropertyList = ({ filters }) => {
  const [properties, setProperties] = useState(initialProperties);

  const filteredProperties = properties.filter((property) => {
    return (
      (!filters.location || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.propertyType || property.type.toLowerCase() === filters.propertyType.toLowerCase()) &&
      (!filters.priceRange || property.price <= parseInt(filters.priceRange, 10)) &&
      (!filters.bedrooms || property.bedrooms >= parseInt(filters.bedrooms, 10)) &&
      (!filters.amenities || filters.amenities.split(',').every(amenity => property.amenities.toLowerCase().includes(amenity.trim().toLowerCase())))
    );
  });

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Properties</h2>
      <div className="flex flex-wrap justify-center">
        {filteredProperties.map((property, index) => (
          <PropertyCard
            key={index}
            image={property.image}
            type={property.type}
            location={property.location}
            price={property.price}
            bedrooms={property.bedrooms}
            amenities={property.amenities}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
