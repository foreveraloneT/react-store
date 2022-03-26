import PropTypes from 'prop-types';

import MovieCard from '../MovieCard';
import './MovieList.scss';

function MovieList({ data }) {
  return (
    <div className="Movie-list">
      {data.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster={movie.poster}
        />
      ))}
    </div>
  );
}

MovieList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  })).isRequired,
}

export default MovieList;
