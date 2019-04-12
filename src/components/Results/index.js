import React, { useState, useEffect } from 'react';
import axios from 'axios';
import commaNumber from 'comma-number';
import './styles.scss';

const Results = ({ searchTerm }) => {
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState(false);

  console.log(searchTerm);

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

  const renderCountries = () => {
    if (searchTerm === '') {
      return countries.map(country => (
        <div className='results__card' key={country.alpha3Code}>
          <img
            src={country.flag}
            alt='Country'
            className='results__card__img'
          />
          <h1 className='results__card__title'>{country.name}</h1>
          <ul className='results__card__details'>
            <li>
              <span>Population:</span> {commaNumber(country.population)}
            </li>
            <li>
              <span>Region:</span> {country.region}
            </li>
            <li>
              <span>Capital:</span> {country.capital}
            </li>
          </ul>
        </div>
      ));
    } else if (searchTerm !== '') {
      const filteredResults = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      console.log(filteredResults);

      if (!filteredResults.length) {
        return <h1>No Countries 😭</h1>;
      }

      return filteredResults.map(country => (
        <div className='results__card' key={country.alpha3Code}>
          <img
            src={country.flag}
            alt='Country'
            className='results__card__img'
          />
          <h1 className='results__card__title'>{country.name}</h1>
          <ul className='results__card__details'>
            <li>
              <span>Population:</span> {commaNumber(country.population)}
            </li>
            <li>
              <span>Region:</span> {country.region}
            </li>
            <li>
              <span>Capital:</span> {country.capital}
            </li>
          </ul>
        </div>
      ));
    }
  };

  return (
    <div className='results'>
      {/* <button onClick={filterCountries}>adsf</button> */}
      {countries ? renderCountries() : <h1>Loading</h1>}
    </div>
  );
};

export default Results;
