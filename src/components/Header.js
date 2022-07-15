import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
    
  return (
    <div className="Header">
        
        <Link to="/">
          <i class="fa-solid fa-house-chimney"></i>
        </Link>
    </div>
  )
}

export default Header