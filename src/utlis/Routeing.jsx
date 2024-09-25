import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from '../Components/Home'
import SignUp from '../Components/SignUp'
import LogIn from '../Components/LogIn'
import DashBoard from '../Components/DashBoard'
function Routeing() {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/dashboard' element={<DashBoard/>}></Route>
    </Routes>
  )
}

export default Routeing