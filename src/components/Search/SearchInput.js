import React from 'react';

const SearchInput = ({ getSearchQuery }) => {
  const sendSearchTerm = e => {
    e.preventDefault();

    if (e.target.value.trim() === '') {
      e.target.value = '';
      return getSearchQuery('');
    }

    return getSearchQuery(e.target.value);
  };

  return (
    <input
      type='text'
      placeholder='Search for a country...'
      className='search__input'
      onChange={sendSearchTerm}
    />
  );
};

export default SearchInput;
