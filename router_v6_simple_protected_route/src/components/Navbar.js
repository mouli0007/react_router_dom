
import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
  
    return (
        <nav className="navbar">
            <Link to = '/'>Home Page</Link>
            <Link to ='/about'>About</Link>           
            <Link to = '/products'>Products</Link>           
            <Link to = '/info'>Info </Link>           
            <Link to = '/others'>Others</Link>           
        </nav>
  )
}

export default Navbar