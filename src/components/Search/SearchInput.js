import React, { useState } from 'react';

const SearchInput = props => {
  const [searchTerm, setSearchTerm] = useState('');

  const sendSearchTerm = () => {
    return props.getSearchQuery(searchTerm);
  };

  return (
    <input
      type='text'
      placeholder='Search for a country...'
      className='search__input'
      onChange={e => setSearchTerm(e.target.value)}
      onKeyDown={sendSearchTerm}
    />
  );
};

export default SearchInput;
