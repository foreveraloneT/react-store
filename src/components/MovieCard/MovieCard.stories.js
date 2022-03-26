import React from 'react'

import MovieCard from './MovieCard';
import './MovieCard.scss'

export default {
  title: 'Components/MovieCard',
  component: MovieCard,
};

const Template = (args) => (
  <MovieCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Arcane',
  poster: 'https://m.media-amazon.com/images/M/MV5BYmU5OWM5ZTAtNjUzOC00NmUyLTgyOWMtMjlkNjdlMDAzMzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
};

export const WithLongTitle = Template.bind({});
WithLongTitle.args = {
  title: 'Harry Potter and the Deathly Hallows: Part 2',
  poster: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
}