import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './styles.scss';

const Header = props => {
  return (
    <header className='header'>
      <div className='header__contents'>
        <h1 className='header__logo'>
          <Link to='/'>Where in the world?</Link>
        </h1>
        <button className='header__mode'>
          <i className='far fa-moon' />
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default withRouter(Header);
