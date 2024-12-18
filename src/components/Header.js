import React, { useState } from 'react'
import '../css/header.css'
import LogoWhite from '../assets/home/LogoWhite.png'
import { Link } from 'react-router-dom'

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
        window.scrollTo(0, 0);
    };

    return(
        <div className='header-wrapper'>
            <Link 
                to='/'
                className='header-left'
                onClick={() => handleLinkClick(null)}>
                <img src={LogoWhite} alt='logo' className='header-logo'/>
            </Link>
            <div className='header-mid'></div>
            <div className='header-right'>
                <Link 
                    to='/menu' 
                    className={`header-link ${activeLink === 'menu' ? 'active-link' : ''}`}
                    onClick={() => handleLinkClick('menu')}>MENU
                </Link>
                <Link 
                    to='/catering' 
                    className={`header-link ${activeLink === 'catering' ? 'active-link' : ''}`}
                    onClick={() => handleLinkClick('catering')}>CATERING
                </Link>
                <Link 
                    to='/story' 
                    className={`header-link ${activeLink === 'story' ? 'active-link' : ''}`}
                    onClick={() => handleLinkClick('story')}>OUR STORY
                </Link>
            </div>
        </div>
    )
}

export default Header;