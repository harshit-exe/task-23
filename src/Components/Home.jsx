import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Home() {


  const navi = useNavigate();

  const handleLoginClick = () => {
    navi("/login");
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Upskill Mafia</h1>
      <p className="text-lg text-gray-600 mt-4">Your Ultimate Web Development Learning Platform</p>
    </header>

    <div className="max-w-xl text-center mb-8">
      <p className="text-gray-700">
        Upskill Mafia is a platform designed to help you master web development skills. Whether you're a beginner or an experienced developer, our courses, tutorials, and community support will guide you every step of the way. Join us to enhance your coding skills, build amazing projects, and connect with like-minded developers.
      </p>
    </div>

    <div className="flex space-x-4">
      <button className="px-6 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600" >
        Sign In
      </button>
      <button className="px-6 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600" onClick={handleLoginClick}>
        Login
      </button>
    </div>
  </div>
  )
}

export default Home