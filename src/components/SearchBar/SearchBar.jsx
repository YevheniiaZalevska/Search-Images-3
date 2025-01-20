import PropTypes from 'prop-types';
import { useState } from 'react';
import customToast from '../ErrorMessage/Toast';
import s from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      customToast('warn', 'Oops... Write something');
      return;
    }

    onSubmit(query);
    setQuery('');
  };
  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <input
          type="text"
          name="query"
          className={s.searchInput}
          placeholder="Search images"
          value={query}
          onChange={e => setQuery(e.target.value.toLowerCase())}
        />
        <button type="submit" className={s.searchBtn}>
          Search
        </button>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchBar;