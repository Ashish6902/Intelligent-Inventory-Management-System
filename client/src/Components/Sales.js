import React from 'react'
import Navbar from './Navbar'
import '../css/inventory.css'

function Sales() {
  return (
    <div>
        <Navbar tab={'Sales'}/>
        <table className='inventory'>
            <thead>
                <th>Product ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Volume</th>
                <th>Quantities</th>
                <th>Quantity Sold</th>
                <th>Entry Date</th>
                <th>Sale Date</th>
                <th>Total Price</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Tshirts</td>
                    <td>40000</td>
                    <td>Appearels</td>
                    <td>30 sq.ft.</td>
                    <td>3</td>
                    <td>2</td>
                    <td>17/04/2024</td>
                    <td>19/04/2024</td>
                    <td>80000</td>
                </tr>
                <tr>
                <td>1</td>
                    <td>Tshirts</td>
                    <td>40000</td>
                    <td>Appearels</td>
                    <td>30 sq.ft.</td>
                    <td>3</td>
                    <td>2</td>
                    <td>17/04/2024</td>
                    <td>19/04/2024</td>
                    <td>80000</td>
                </tr>
                <tr>
                <td>1</td>
                    <td>Tshirts</td>
                    <td>40000</td>
                    <td>Appearels</td>
                    <td>30 sq.ft.</td>
                    <td>3</td>
                    <td>2</td>
                    <td>17/04/2024</td>
                    <td>19/04/2024</td>
                    <td>80000</td>
                </tr>
                <tr>
                <td>1</td>
                    <td>Tshirts</td>
                    <td>40000</td>
                    <td>Appearels</td>
                    <td>30 sq.ft.</td>
                    <td>3</td>
                    <td>2</td>
                    <td>17/04/2024</td>
                    <td>19/04/2024</td>
                    <td>80000</td>
                </tr>
                <tr>
                <td>1</td>
                    <td>Tshirts</td>
                    <td>40000</td>
                    <td>Appearels</td>
                    <td>30 sq.ft.</td>
                    <td>3</td>
                    <td>2</td>
                    <td>17/04/2024</td>
                    <td>19/04/2024</td>
                    <td>80000</td>
                </tr>
                
            </tbody>
        </table>
    </div>
  )
}

export default Sales