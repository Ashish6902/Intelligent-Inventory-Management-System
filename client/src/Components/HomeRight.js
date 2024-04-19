import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import { Outlet } from 'react-router-dom'; // Import Outlet

function HomeRight() {
  return (
    <div className='hmRgt'>
      <Outlet/>
    </div>
  )
}

export default HomeRight