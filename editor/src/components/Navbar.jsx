import React,{ useState } from 'react';
import cactus from '/cactus.png'
import './Sidebar.css'
import './Navbar.css'

 
  
function Navbar() {

  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div className='nav'>
       <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div id = 'bars'> ☰</div>

  {isHovered && (
  
  <ul class="menu">
    <li><a href="#" >Copy Code <img className = "icons" alt = "github" src = "https://cdn-icons-png.flaticon.com/128/10419/10419629.png"img/></a></li>
    <li><a href="https://github.com/Candy505/Online_CodeEditor.git" target='_blank'>View on Github<img className = "icons" alt = "github" src = "https://cdn-icons-png.flaticon.com/128/733/733553.png"img/></a></li>
    <li><a href="#">Compile (Coming Soon)</a></li>
    <li><a href="#">Live Share (Coming Soon)</a></li>
  </ul>
   
   )
   }
   </div>

    <div className='logo'>
   <img src={cactus} alt="Cactus" id ="cactus" />
        Code Cactus
    </div>
    
   </div>
  )
}


export default Navbar