import React from 'react'
import Sidebar from './Sidebar'
import HomeRight from './HomeRight'
import '../css/homeRight.css'

function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <HomeRight/>
    </div>
  )
}

export default Home