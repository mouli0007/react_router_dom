import React from 'react'
import { Outlet } from 'react-router-dom'

function SharedProduct() {


  return (
      <div>
          <h2>Prodcuts</h2>
          <h4>View your Products</h4>
          <Outlet/>
    </div>
  )
}

export default SharedProduct