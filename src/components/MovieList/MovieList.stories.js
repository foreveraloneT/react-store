import React from 'react'

import { mockMovies } from '../../__fixtures__/movie';
import MovieList from './MovieList';

export default {
  title: 'Components/MovieList',
  component: MovieList,
  decorators: [
    (Story) => (
      <div style={{ width: 640 }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => (
  <MovieList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: mockMovies,
};
