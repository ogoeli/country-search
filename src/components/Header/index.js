import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    checkTheme();
  }, [dark]);

  const checkTheme = () => {
    if (!localStorage.getItem('theme')) {
      return setLightTheme();
    }

    return localStorage.getItem('theme') === 'dark'
      ? setDarkTheme()
      : setLightTheme();
  };

  const setDarkTheme = () => {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    return setDark(true);
  };

  const setLightTheme = () => {
    localStorage.removeItem('theme');
    document.documentElement.removeAttribute('data-theme');
    return setDark(false);
  };

  return (
    <header className='header'>
      <div className='header__contents'>
        <h1 className='header__logo'>
          <Link to='/'>Where in the world?</Link>
        </h1>

        {dark ? (
          <button className='header__mode' onClick={setLightTheme}>
            <i className='fas fa-lightbulb' />
            Light Mode
          </button>
        ) : (
          <button className='header__mode' onClick={setDarkTheme}>
            <i className='far fa-lightbulb' />
            Dark Mode
          </button>
        )}
      </div>
    </header>
  );
};

export default withRouter(Header);
