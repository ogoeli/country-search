import React, { useState } from 'react';
import axios from 'axios';
import Search from './Search';
import Results from './Results';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getSearchQuery = value => {
    return setSearchTerm(value);
  };

  return (
    <>
      <Search getSearchQuery={getSearchQuery} />
      <Results searchTerm={searchTerm} />
    </>
  );
};

export default Home;
