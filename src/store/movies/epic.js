import { of } from 'rxjs';
import {
  switchMap,
  withLatestFrom,
  map,
  catchError,
  filter,
  mapTo,
  distinctUntilChanged,
  debounceTime,
} from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { requestAPI } from '../../utils/rxjs';

import { combineEpics } from 'redux-observable';

import { actions } from './slice';

const searchMovieRequestEpic = (action$, state$) => action$.pipe(
  ofType('movies/searchRequest'),
  withLatestFrom(state$),
  switchMap(([_, state]) => {
    const { keyword } = state.movies;

    if (keyword.length === 0) {
      return of(actions.idleSearch());
    }

    return requestAPI({
      method: 'GET',
      url: 'http://www.omdbapi.com',
      params: {
        apikey: process.env.REACT_APP_API_KEY,
        s: keyword,
      },
    }).pipe(
      map((data) => {
        if (!data.Search) return actions.searchFailure()

        return actions.searchSuccess(data.Search.map((movie) => ({
          id: movie.imdbID,
          title: movie.Title,
          poster: movie.Poster,
        })));
      }),
      catchError(() => of(actions.searchFailure())),
    );
  }),
)

const setKeywordEpic = action$ => action$.pipe(
  ofType('movies/setKeyword'),
  filter(action => action.payload.length > 0),
  map(action => action.payload),
  debounceTime(500),
  distinctUntilChanged(),
  mapTo(actions.searchRequest()),
);

export default combineEpics(
  searchMovieRequestEpic,
  setKeywordEpic,
)
