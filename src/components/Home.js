import React from 'react';
import axios from 'axios';
import Search from './Search';
import Results from './Results';

const Home = () => {
  return (
    <>
      <Search />
      <Results />
    </>
  );
};

export default Home;
