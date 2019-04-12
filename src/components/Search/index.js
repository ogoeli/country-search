import React from 'react';
import './styles.scss';
import SearchInput from './SearchInput';
import SearchDropdown from './SearchDropdown';

const Search = props => {
  return (
    <div className='search'>
      <i className='fas fa-search search__icon' />
      <SearchInput getSearchQuery={props.getSearchQuery} />
      <SearchDropdown getSelectedRegion={props.getSelectedRegion} />
    </div>
  );
};

export default Search;
