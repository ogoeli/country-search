import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/main.scss';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';

const App = () => {
  const [countries, setCountries] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const results = await axios.get('https://restcountries.eu/rest/v2/all');
    const { data } = results;

    return setCountries(data);
  };

  return (
    <>
      <Header />
      <div className='container'>
        <Search searchTerm={searchTerm} />
        <Results countries={countries} />
      </div>
    </>
  );
};

export default App;
