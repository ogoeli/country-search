import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import Results from './Results';

const Home = () => {
  const [countries, setCountries] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    if (localStorage.getItem('countries')) {
      return setCountries(JSON.parse(localStorage.getItem('countries')));
    }

    const results = await axios.get('https://restcountries.eu/rest/v2/all');
    const { data } = results;

    await localStorage.setItem('countries', JSON.stringify(data));

    return setCountries(data);
  };

  return (
    <>
      <Search />
      <Results countries={countries} />
    </>
  );
};

export default Home;
