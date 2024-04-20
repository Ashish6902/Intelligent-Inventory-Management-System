import React from 'react'
import '../css/sidebar.css'
import { Link, useLocation } from 'react-router-dom'
import dash from '../Images/dashboard.png'
import softlink from '../Images/softlink.png'
import inventory from '../Images/inventory.png'
import sales from '../Images/sales.png'

function Sidebar() {
    const location = useLocation()
    const cl = location.pathname
    console.log(cl)
  return (
    <div className='sidebar'>
        <div className="logoName">
            {/* <div className="logo">
                <img src={dash} alt="" />
            </div>
            <p>Softlink</p> */}
            <img src={softlink} alt="" className='logo'/>
        </div>
        <div className="sd">
            <Link to={'/'} className="sdCompMain">
                <div className={`sdComp ${cl === '/' ? 'sdComp2' : ''}`} >
                    {/* <div className="compImg"></div> */}
                    <img className="compImg" src={dash} alt="" />
                    <p>Dashboard</p>
                </div>
                <div className="sdd" style={{ display: cl === '/' ? 'block' : 'none' }}></div> {/* Correct style attribute syntax */}
            </Link>
            <Link to={'/inventory'} className="sdCompMain">
                <div className={`sdComp ${cl === '/inventory' ? 'sdComp2' : ''}`} >
                    {/* <div className="compImg"> */}
                        <img src={inventory} alt="" className='compImg'/>
                    {/* </div> */}
                    <p>Inventory</p>
                </div>
                <div className="sdd" style={{ display: cl === '/inventory' ? 'block' : 'none' }}></div> {/* Correct style attribute syntax */}
            </Link>
            <Link to={'/sales'} className="sdCompMain">
                <div className={`sdComp ${cl === '/sales' ? 'sdComp2' : ''}`} >
                    {/* <div className="compImg"></div> */}
                    <img src={sales} alt="" className='compImg'/>
                    <p>Sales</p>
                </div>
                <div className="sdd" style={{ display: cl === '/sales' ? 'block' : 'none' }}></div> {/* Correct style attribute syntax */}
            </Link>
            
        </div>
        
    </div>
  )
}

export default Sidebar