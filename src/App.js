import React from 'react';
import './styles/main.scss';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <h1>Container</h1>
      </div>
    </>
  );
};

export default App;
