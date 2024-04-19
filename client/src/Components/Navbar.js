import React, { useEffect, useState } from 'react'

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
                <div className="nvcImg"></div>
                <p>Hardlink &#62; </p>
            </div>
            <p className={dsaTab}>{tab}</p>
        </div>

        <div className="profile"></div>
        
    </div>
  )
}

export default Navbar