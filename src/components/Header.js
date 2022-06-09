import React from 'react';
import Troll from './icons/Troll';

const Header = () => {
  return (
    <header>
      <div className='logo--container'>
        <a href='/'>
          <span className='logo'><Troll /></span>
          <span className='logo--name'>Meme Generator</span>
        </a>
      </div>
    </header>
  )
}

export default Header;