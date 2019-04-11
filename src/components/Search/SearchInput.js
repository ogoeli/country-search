import React, { useState } from 'react';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <input
      type='text'
      placeholder='Search for a country...'
      className='search__input'
      onChange={e => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchInput;
