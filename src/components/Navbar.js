import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const [click,setClick] = useState(false);
    const handleClick= () =>setClick(!click)
    const closeMobileApplication=()=>setClick(false)
  return (
    <>
     <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo'>
                UD <i className="fa-solid fa-house" />
            </Link>  
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>     
            <div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileApplication}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Services' className='nav-links' onClick={closeMobileApplication}>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Products' className='nav-links' onClick={closeMobileApplication}>
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Sign-up' className='nav-links-mobile' onClick={closeMobileApplication}>
                  Sign-Up
                </Link>
              </li>
              </ul>
              
              </div> 
        </div>
     </nav>
    </>
  )
}

export default Navbar