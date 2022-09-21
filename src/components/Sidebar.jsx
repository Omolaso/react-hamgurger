import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
// import Home from '../components/Home'
// import About from '../components/About'
// import Products from '../components/Products'
import '../App.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

  return (
    <>
        <div className="navbar">
            <Link to='#' className='menu-bars'>
                <FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <AiOutlineClose/>
                    </Link>
                </li>
                <li className='nav-text'>
                    <Link to='/Home'>Home</Link>
                </li>
                <li className='nav-text'>
                    <Link to='/About'>About</Link>
                </li>
                <li className='nav-text'>
                    <Link to='/Products'>Products</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Sidebar