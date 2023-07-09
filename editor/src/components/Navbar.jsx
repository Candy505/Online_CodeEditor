import React from 'react'
import './Navbar.css' ;
import cactus from '/cactus.png'
function Navbar() {
  return (
    <div className='nav'>
    <p id = 'menu'> ☰</p>
    <div className='logo'>
   <img src={cactus} alt="Cactus" id ="cactus" />
        Code Cactus
    </div>
    
   </div>
  )
}

export default Navbar