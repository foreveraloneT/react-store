import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as moviesStore from '../../store/movies';

import SearchInput from './SearchInput';

function SearchInputContainer(props) {
  const keyword = useSelector(moviesStore.selectors.keyword);
  const dispatch = useDispatch()
  const searchMovie = moviesStore.hooks.useSearchMovie()

  useEffect(() => {
    searchMovie();
  }, [keyword]);

  const onChange = ({ target: { value } }) => {
    dispatch(moviesStore.actions.setKeyword(value));
  }

  return (
    <SearchInput
      value={keyword}
      onChange={onChange}
      { ...props }
    />
  )
}

export default SearchInputContainer;
