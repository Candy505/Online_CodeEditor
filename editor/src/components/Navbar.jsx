import React from 'react'
import './Navbar.css' ;
import cactus from '/cactus.png'
function Navbar() {
  return (
    <div className='nav'>
   <img src={cactus} alt="Cactus" id ="cactus" />

        Code Cactus
    </div>
  )
}

export default Navbar