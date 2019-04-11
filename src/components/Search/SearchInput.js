import React, { useState } from 'react';

const SearchInput = props => {
  console.log(props);
  return (
    <input
      testchild={'asfdasdf'}
      type='text'
      placeholder='Search for a country...'
      className='search__input'
      // onChange={e => }
      onChange={e => props.action(e.target.value)}
      // onKeyDown={e => (e.key === 'Enter' ? console.log(searchTerm) : null)}
    />
  );
};

export default SearchInput;
