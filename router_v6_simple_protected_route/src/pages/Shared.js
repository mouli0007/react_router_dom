import React from 'react'
import { Link,Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import StyledNavbar from '../components/StyledNavbar'

function Shared() {
    return (
      
        <div>
            <StyledNavbar />
            <Outlet/>
        </div>
  )
}

export default Shared