import React, { useState } from 'react';
import './styles.scss';
import SearchInput from './SearchInput';
import SearchDropdown from './SearchDropdown';

const Search = props => {
  const handler = value => console.log(value);

  return (
    <div className='search'>
      <i className='fas fa-search search__icon' />
      <SearchInput action={handler} />
      <SearchDropdown />
    </div>
  );
};

export default Search;
