import React, { useState } from 'react';
import Search from './Search';
import Results from './Results';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  const getSearchQuery = value => {
    return setSearchTerm(value);
  };

  const getSelectedRegion = region => {
    return setSelectedRegion(region);
  };

  return (
    <>
      <Search
        getSearchQuery={getSearchQuery}
        getSelectedRegion={getSelectedRegion}
      />
      <Results searchTerm={searchTerm} selectedRegion={selectedRegion} />
    </>
  );
};

export default Home;
