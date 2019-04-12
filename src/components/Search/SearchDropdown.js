import React, { useState } from 'react';

const SearchDropdown = () => {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [dropdown, setDropdown] = useState(false);
  const regions = [
    'All Regions',
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania'
  ];

  const toggleDropDown = () => {
    return setDropdown(!dropdown);
  };

  const displaySelectedRegion = e => {
    setSelectedRegion(e.target.textContent);
    return setDropdown(false);
  };

  const displayRegions = regions.filter(region => region !== selectedRegion);

  return (
    <div className='search__dropdown'>
      <button className='search__dropdown__btn' onClick={toggleDropDown}>
        {selectedRegion}{' '}
        {dropdown ? (
          <i className='fas fa-angle-up' />
        ) : (
          <i className='fas fa-angle-down' />
        )}
      </button>
      {dropdown ? (
        <ul className='search__dropdown__list'>
          {displayRegions.map(region => (
            <li key={region} onClick={displaySelectedRegion}>
              {region}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SearchDropdown;
