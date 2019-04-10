import React from 'react';
import './styles.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__contents'>
        <h1 className='header__logo'>Country Search</h1>
        <button className='header__mode'>
          <i class='far fa-moon' />
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
