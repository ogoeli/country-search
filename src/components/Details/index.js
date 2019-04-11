import React from 'react';
import './styles.scss';

const Details = props => {
  // console.log(props.match.params.cid);
  return (
    <div className='details'>
      <button className='details__btn'>Back</button>

      <div className='details__country'>
        <img
          src='https://restcountries.eu/data/ala.svg'
          alt='Country Name'
          className='details__country__img'
        />

        <div className='details__country__info'>
          <h1>Country Title</h1>

          <div className='details__country__info__lists'>
            <ul>
              <li>Native Name: </li>
              <li>Population: </li>
              <li>Region: </li>
              <li>Sub Region: </li>
              <li>Capital: </li>
            </ul>

            <ul>
              <li>Top Level Domain: </li>
              <li>Currencies: </li>
              <li>Languages: </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
