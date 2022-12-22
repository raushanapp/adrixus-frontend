import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Users from './Users'

function MainRoute() {
  return (
    <Routes>
          <Route path='/' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/users/dashborad' element={<Users/>} />
    </Routes>
  )
}

export default MainRoute