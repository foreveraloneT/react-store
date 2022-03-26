import MovieList from './MovieList';
import { useSelector } from 'react-redux';

import * as moviesStore from '../../store/movies';

function MovieListContainer() {
  const data = useSelector(moviesStore.selectors.data);
  const loading = useSelector(moviesStore.selectors.isFetching);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <MovieList
      data={data}
    />
  )
}

export default MovieListContainer;