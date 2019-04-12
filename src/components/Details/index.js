import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import commaNumber from 'comma-number';
import './styles.scss';

const Details = props => {
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCountryData();
  }, []);

  const getCountryData = async () => {
    if (localStorage.getItem('countries')) {
      const countries = JSON.parse(localStorage.getItem('countries'));
      const country = countries.filter(
        country => country.alpha3Code === props.match.params.cid.toUpperCase()
      );

      return country.length ? setCountryData(country[0]) : setError(true);
    }

    try {
      const res = await axios.get(
        `https://restcountries.eu/rest/v2/alpha/${props.match.params.cid.toUpperCase()}`
      );
      const { data } = res;
      return setCountryData(data);
    } catch (err) {
      return setError(true);
    }
  };

  const displayCurrencies = () => {
    return countryData.currencies.map(currency => currency.code).join(', ');
  };

  const displayLanguages = () => {
    return countryData.languages.map(language => language.name).join(', ');
  };

  const renderCountry = () => {
    return (
      <div className='details__country'>
        <img
          src='https://restcountries.eu/data/ala.svg'
          alt='Country Name'
          className='details__country__img'
        />

        <div className='details__country__info'>
          <h1>{countryData.name}</h1>

          <div className='details__country__info__lists'>
            <ul>
              <li>Native Name: {countryData.nativeName}</li>
              <li>Population: {commaNumber(countryData.population)}</li>
              <li>Region: {countryData.region}</li>
              <li>Sub Region: {countryData.subregion}</li>
              <li>Capital: {countryData.capital}</li>
            </ul>

            <ul>
              <li>Top Level Domain: {countryData.topLevelDomain}</li>
              <li>Currencies: {displayCurrencies()}</li>
              <li>Languages: {displayLanguages()}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return countryData && !error ? (
    <div className='details'>
      <button className='details__btn'>Back</button>
      {renderCountry()}
    </div>
  ) : (
    <h1>No Country Found</h1>
  );
};

export default withRouter(Details);
