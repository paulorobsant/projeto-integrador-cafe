import React from 'react'
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'


import LoginView from '../views/LoginView/LoginViews'
import NotFound from '../views/NotFound/NotFound'
import RegisterView from '../views/RegisterView/RegisterView'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginView />} path='/' />
        <Route element={<RegisterView />} path='/register' />
        <Route element={<NotFound />} path='/not-found' />
        <Route element={<Navigate to='/not-found'/>} path='*'/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter