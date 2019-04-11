import React from 'react';
import './styles.scss';
import SearchInput from './SearchInput';
import SearchDropdown from './SearchDropdown';

const Search = () => {
  return (
    <div className='search'>
      <i className='fas fa-search search__icon' />
      <SearchInput />
      <SearchDropdown />
    </div>
  );
};

export default Search;
