import { combineEpics } from 'redux-observable';
import { configureStore } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable';

import moviesReducer from './movies'

import moviesEpic from './movies/epic';

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(
  moviesEpic,
);

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic)

export default store;
