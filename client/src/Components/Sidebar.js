import React from 'react'
import '../css/sidebar.css'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
    const location = useLocation()
    const cl = location.pathname
    console.log(cl)
  return (
    <div className='sidebar'>
        <div className="logoName">
            <div className="logo"></div>
            <p>Hardlink</p>
        </div>
        <div className="sd">
            <Link to={'/'} className="sdCompMain">
                <div className={`sdComp ${cl === '/' ? 'sdComp2' : ''}`} >
                    <div className="compImg"></div>
                    <p>Dashboard</p>
                </div>
                <div className="sdd" style={{ display: cl === '/' ? 'block' : 'none' }}></div> {/* Correct style attribute syntax */}
            </Link>
            <Link to={'/inventory'} className="sdCompMain">
                <div className={`sdComp ${cl === '/inventory' ? 'sdComp2' : ''}`} >
                    <div className="compImg"></div>
                    <p>Inventory</p>
                </div>
                <div className="sdd" style={{ display: cl === '/inventory' ? 'block' : 'none' }}></div> {/* Correct style attribute syntax */}
            </Link>
            <Link to={'/sales'} className="sdCompMain">
                <div className={`sdComp ${cl === '/sales' ? 'sdComp2' : ''}`} >
                    <div className="compImg"></div>
                    <p>Sales</p>
                </div>
                <div className="sdd" style={{ display: cl === '/sales' ? 'block' : 'none' }}></div> {/* Correct style attribute syntax */}
            </Link>
            
        </div>
        
    </div>
  )
}

export default Sidebar