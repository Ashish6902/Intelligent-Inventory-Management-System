import React from 'react'
import Navbar from './Navbar'
import '../css/dashboard.css'
import dataAnalysis from '../Images/dataAnalysis.png'
import topProducts from '../Images/topProduct.png'

function Dashboard() {
  return (
    <div>
        <Navbar tab={'Dashboard'}/>
        <div className="dashboard">
        <h1>Hey, Omkar Garate!</h1>
        <p className='headP'>Let's see hows business going.</p>
        <div className="dashD1">
            <div className="dsd">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>30/ <span>50</span></p>
                <div className="dsdImg"></div>
            </div>
            <div className="dsd">
                <p>Lorem ipsum <br /> dolor sit amet.</p>
                <p className='dsdNum'>354</p>
                {/* <div className="dsdImg"></div> */}
            </div>
            <div className="dsd">
                <p>Lorem ipsum <br /> dolor sit amet.</p>
                <p className='dsdNum'>354</p>
            </div>
        </div>
        <div className="dashD2">
            <div className="dataAna">
                <h3>
                    {/* <div className='dda'></div> */}
                    <img src={dataAnalysis} alt="" className='dda'/>
                    Data Analysis
                </h3>
                <div className="daGraph"></div>
            </div>
            <div className="RecSale">
                <h3>
                    {/* <div className='dda'>  </div> */}
                    <img src={topProducts} alt="" className='dda'/>
                    
                    Top Products
                </h3>
                <div className="rsd"></div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Dashboard