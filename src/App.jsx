import React from 'react'
import NavBar from './Components/NavBar'
import { Route } from 'react-router-dom'
import Routeing from './utlis/Routeing'
import InternshipListing from './Components/InternshipListing'

function App() {
  return (
    <div className='bg-zinc-400 h-screen w-screen'>
      <NavBar/>
      <Routeing/>
    </div>
  )
}

export default App