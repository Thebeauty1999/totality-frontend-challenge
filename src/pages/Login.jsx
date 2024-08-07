

// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
     
      const loggedInUser = { name, email }; 
      onLogin(loggedInUser);
      navigate('/');
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  return (
    <div className='h-[100vh]' style={{backgroundImage : 'url(https://picfiles.alphacoders.com/463/thumb-1920-463463.jpg)'}}>

   
    <div className="max-w-md mx-auto pt-10 text-2xl" >
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white mb-2">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
