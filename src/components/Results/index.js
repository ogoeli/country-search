import React from 'react';
import commaNumber from 'comma-number';
import './styles.scss';

const Results = ({ countries }) => {
  const renderCountries = () => {
    return countries.map(country => (
      <div className='results__card' key={country.alpha3Code}>
        <img src={country.flag} alt='Country' className='results__card__img' />
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
  };

  return (
    <div className='results'>
      {countries ? renderCountries() : <h1>Loading</h1>}
    </div>
  );
};

export default Results;
