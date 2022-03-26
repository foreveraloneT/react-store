import PropTypes from 'prop-types'

function MovieCard({ title, poster }) {
  return (
    <div className="Movie-card">
      <div class="Movie-card__overlay">
        <div class="Movie-card__title">{title}</div>
      </div>
      {/* <img src={poster} alt={title} /> */}
      <div
        className="Movie-card__poster"
        style={{
          backgroundImage: `url(${poster})`,
        }}
      />
    </div>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}

export default MovieCard;