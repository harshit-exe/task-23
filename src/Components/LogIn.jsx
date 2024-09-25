import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const [email, setEmail] = useState  ('');
  const [password, setPassword] = useState('');
  const navi= useNavigate()
 
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (email && password) {
      alert('Login successful!');
      // You can add additional login logic here, such as redirecting the user
      navi('/dashboard');
    } else {
      alert('Please enter both email and password.');
    }
  };


  return (
    <div className="w-full h-full flex items-center justify-center m-auto bg-gray-100">
      <div className="w-[35vw] h-[70vh] bg-zinc-300 p-8 rounded-lg shadow-lg flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">Login to Your Account</h2>

        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            
            className="w-full py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}


export default LogIn