import React from 'react';

const SearchDropdown = () => {
  return (
    <div className='search__dropdown'>
      <button className='search__dropdown__btn'>
        Filter by Region <i className='fas fa-angle-down' />
      </button>

      <ul className='search__dropdown__list'>
        <li>Africa</li>
        <li>America</li>
        <li>Asia</li>
        <li>Europe</li>
        <li>Oceania</li>
      </ul>
    </div>
  );
};

export default SearchDropdown;
