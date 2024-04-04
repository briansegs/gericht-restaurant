import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';

import './Navbar.css';

const liData = [
  {
    route: '#home',
    text: 'Home'
  },
  {
    route: '#about',
    text: 'About'
  },
  {
    route: '#menu',
    text: 'Menu'
  },
  {
    route: '#awards',
    text: 'Awards'
  },
  {
    route: '#contact',
    text: 'Contact'
  }
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Links = ({navData: { route, text }}) => (
    <li className='p__opensans'><a href={route}>{text}</a></li>
  )

  const SmallLinks = ({navData: { route, text }}) => (
    <li className='p__opensans' onClick={() => setToggleMenu(false)}>
      <a href={route}>
        {text}
      </a>
    </li>
  )

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        {liData.map((data) =>
          <Links navData={data} />
        )}
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>
          Log in / Register
        </a>
        <div />
        <a href="#home" className='p__opensans'>
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu 
          color='#fff' 
          fontSize={27} 
          onClick={() => setToggleMenu(true)} 
        />
        
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu 
              fontSize={27} 
              className='overlay__close' 
              onClick={() => setToggleMenu(false)} 
            />
            <ul className='app__navbar-smallscreen_links'>
              {liData.map((data) =>
                <SmallLinks navData={data} />
              )}
            </ul>
          </div>
        )}
        
      </div>
    </nav>
  )
}
export default Navbar;
