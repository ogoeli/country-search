import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import commaNumber from 'comma-number';
import './styles.scss';

const Results = ({ searchTerm, selectedRegion, history }) => {
  const [countries, setCountries] = useState(null);
  // const [error, setError] = useState(false);

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
    if (searchTerm === '' && selectedRegion === 'All Regions') {
      return countries.map(country => (
        <div
          className='results__card'
          key={country.alpha3Code}
          onClick={() => history.push(`/${country.alpha3Code.toLowerCase()}`)}
        >
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
    } else if (searchTerm === '' && selectedRegion !== 'All Regions') {
      const filteredResults = countries.filter(
        country =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          country.region === selectedRegion
      );

      if (!filteredResults.length) {
        return (
          <h1>
            No Countries{' '}
            <span role='img' aria-label='cry emoji'>
              😭
            </span>
          </h1>
        );
      }

      return filteredResults.map(country => (
        <div
          className='results__card'
          key={country.alpha3Code}
          onClick={() => history.push(`/${country.alpha3Code.toLowerCase()}`)}
        >
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
    } else if (searchTerm !== '' && selectedRegion === 'All Regions') {
      const filteredResults = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (!filteredResults.length) {
        return (
          <h1>
            No Countries{' '}
            <span role='img' aria-label='cry emoji'>
              😭
            </span>
          </h1>
        );
      }

      return filteredResults.map(country => (
        <div
          className='results__card'
          key={country.alpha3Code}
          onClick={() => history.push(`/${country.alpha3Code.toLowerCase()}`)}
        >
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
    } else if (searchTerm !== '' && selectedRegion !== 'All Regions') {
      const filteredResults = countries.filter(
        country =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          country.region === selectedRegion
      );

      console.log(filteredResults);

      if (!filteredResults.length) {
        return (
          <h1>
            No Countries{' '}
            <span role='img' aria-label='cry emoji'>
              😭
            </span>
          </h1>
        );
      }

      return filteredResults.map(country => (
        <div
          className='results__card'
          key={country.alpha3Code}
          onClick={() => history.push(`/${country.alpha3Code.toLowerCase()}`)}
        >
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
      {countries ? renderCountries() : <h1>Loading</h1>}
    </div>
  );
};

export default withRouter(Results);
