import React from 'react';
import './styles/main.scss';
import Header from './components/Header';
import Search from './components/Search';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Search />
      </div>
    </>
  );
};

export default App;
