import React, { useEffect, useState } from 'react'
import sftlink from '../Images/sftlink.jpg'
import profile from '../Images/profile.png'

function Navbar({tab}) {
  const [dsaTab, setDsaTab] = useState('dsa2')
  useEffect(()=>{
    setTimeout(() => {
      setDsaTab('dsa')
    }, 200);
  },[])
  return (
    <div className='navbar'>
        <div className="navLoc">
            <div className="nvComp">
                {/* <div className="nvcImg"></div> */}
                <img src={sftlink} alt="" className='nvcImg'/>
                <p>Softlink &#62; </p>
            </div>
            <p className={dsaTab}>{tab}</p>
        </div>

        {/* <div className="profile"></div> */}
        <img src={profile} alt="" className='profile'/>
        
    </div>
  )
}

export default Navbar