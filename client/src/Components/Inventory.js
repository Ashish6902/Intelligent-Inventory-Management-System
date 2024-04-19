import React from 'react'
import Navbar from './Navbar'
import '../css/inventory.css'

function Inventory() {
  return (
    <div>
        <Navbar tab={'Inventory'}/>
        <table className='inventory'>
            <thead>
                <th>Shelf No.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Volume</th>
                <th>Quantities</th>
                <th>Sell</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Tshirts</td>
                    <td>40000</td>
                    <td>Appearels</td>
                    <td>30 sq.ft.</td>
                    <td>3</td>
                    <td className='sell'><p>Sell</p></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tshirts</td>
                    <td>40000</td>
                    <td>Appearels</td>
                    <td>30 sq.ft.</td>
                    <td>3</td>
                    <td className='sell'><p>Sell</p></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tshirts</td>
                    <td>40000</td>
                    <td>Appearels</td>
                    <td>30 sq.ft.</td>
                    <td>3</td>
                    <td className='sell'><p>Sell</p></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tshirts</td>
                    <td>40000</td>
                    <td>Appearels</td>
                    <td>30 sq.ft.</td>
                    <td>3</td>
                    <td className='sell'><p>Sell</p></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tshirts</td>
                    <td>40000</td>
                    <td>Appearels</td>
                    <td>30 sq.ft.</td>
                    <td>3</td>
                    <td className='sell'><p>Sell</p></td>
                </tr>
                
            </tbody>
        </table>
    </div>
  )
}

export default Inventory