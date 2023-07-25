import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='navbar-container'>
        <div className="nav"><Link to='/'>Home</Link></div>
        <div className="nav"><Link to='/shop'>Shop</Link></div>
        <div className="nav"><Link to='/about'>About</Link></div>
        <div className="nav"><Link to='/rick'>Rick</Link></div>


        
    </div>
  )
}

export default Navbar