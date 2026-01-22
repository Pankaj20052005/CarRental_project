import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'
import Login from './components/Login'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const location = useLocation()

  // Define paths where you DON'T want the navbar
  const hideNavbarPaths = ['/owner', '/admin']
  const shouldHideNavbar = hideNavbarPaths.some(path => location.pathname.startsWith(path))

  return (
    <>
    {showLogin && <Login setShowLogin={setShowLogin}/>}
      
      {/* Only show Navbar if we aren't on an owner/admin path */}
      {!shouldHideNavbar && <Navbar setShowLogin={setShowLogin} />}
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/car-details/:id" element={<CarDetails/>} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/my-bookings" element={<MyBookings/>} />
      </Routes>

       <Footer/>
    </>
  )
}

export default App