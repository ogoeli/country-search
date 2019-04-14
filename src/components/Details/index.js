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

  const displayBorders = () => {
    const borderCountries = countryData.borders;

    if (!borderCountries.length) {
      return null;
    }

    const borderCountriesList = borderCountries
      .map(border => <li key={border}>{border}</li>)
      .slice(0, 3);

    return (
      <div className='details__country__info__borders'>
        <p>Border Countries:</p>
        <ul>{borderCountriesList}</ul>
      </div>
    );
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
          <h1 className='details__country__info__title'>{countryData.name}</h1>

          <div className='details__country__info__lists'>
            <ul>
              <li>
                <span>Native Name:</span> {countryData.nativeName}
              </li>
              <li>
                <span>Population:</span> {commaNumber(countryData.population)}
              </li>
              <li>
                <span>Region:</span> {countryData.region}
              </li>
              <li>
                <span>Sub Region:</span> {countryData.subregion}
              </li>
              <li>
                <span>Capital:</span> {countryData.capital}
              </li>
            </ul>

            <ul>
              <li>
                <span>Top Level Domain:</span> {countryData.topLevelDomain}
              </li>
              <li>
                <span>Currencies:</span> {displayCurrencies()}
              </li>
              <li>
                <span>Languages:</span> {displayLanguages()}
              </li>
            </ul>
          </div>

          {displayBorders()}
        </div>
      </div>
    );
  };

  return countryData && !error ? (
    <div className='details'>
      <button className='details__btn' onClick={() => props.history.goBack()}>
        Back
      </button>
      {renderCountry()}
    </div>
  ) : (
    <div className='details'>
      <button className='details__btn' onClick={() => props.history.goBack()}>
        Back
      </button>
      <h1>No Country Found</h1>
    </div>
  );
};

export default withRouter(Details);
