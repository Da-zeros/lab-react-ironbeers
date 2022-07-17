import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
    
  return (
        
        <Link className="homeIcon" to="/">
          <i class="fa-solid fa-house-chimney fa-5x"></i>
        </Link>
  )
}

export default Header