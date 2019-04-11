import React, { useState } from 'react';

const SearchInput = props => {
  const [searchTerm, setSearchTerm] = useState('');

  const sendSearchTerm = () => {
    if (searchTerm.trim() === '') {
      return;
    }

    return props.action(searchTerm);
  };

  return (
    <input
      type='text'
      placeholder='Search for a country...'
      className='search__input'
      onChange={e => setSearchTerm(e.target.value)}
      onKeyDown={e => (e.key === 'Enter' ? sendSearchTerm() : null)}
    />
  );
};

export default SearchInput;
