import { useState } from 'react';
import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

import { LOADING_STATUS } from '../constants/loadingStatus';
import * as movieApi from '../apis/movie';
import axios from 'axios';

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    keyword: '',
    fetchingStatus: LOADING_STATUS.IDLE,
    data: [],
  },
  reducers: {
    setKeyword: (state, { payload }) => {
      state.keyword = payload;
    },
    searchRequest(state, { payload }) {
      state.fetchingStatus = LOADING_STATUS.LOADING;
      state.cancelToken = payload;
    },
    searchSuccess(state, { payload }) {
      state.fetchingStatus = LOADING_STATUS.SUCCESS;
      state.data = payload;
    },
    searchFailure(state) {
      state.fetchingStatus = LOADING_STATUS.FAILURE;
      state.data = [];
    },
  },
});

export default movieSlice.reducer;

export const actions = movieSlice.actions;

const keyword = (state) => state.movies.keyword;
const data = (state) => state.movies.data;
const fetchingStatus = (state) => state.movies.fetchingStatus;
const isFetching = (state) => fetchingStatus(state) === LOADING_STATUS.LOADING;
const isError = (state) => fetchingStatus(state) === LOADING_STATUS.FAILURE;

export const selectors = {
  keyword,
  data,
  fetchingStatus,
  isFetching,
  isError,
}

const useSearchMovie = () => {
  const [cancelToken, setCancelToken] = useState(null);
  const [timer, setTimer] = useState(null)
  const dispatch = useDispatch();
  const keyword = useSelector(selectors.keyword);

  const search = async () => {
    if (keyword.length === 0) return;

    if (cancelToken) {
      cancelToken.cancel()
    }

    const newCancelToken = axios.CancelToken.source();
    setCancelToken(newCancelToken);

    dispatch(actions.searchRequest());

    try {
      const data = await movieApi.search(keyword, newCancelToken.token);

      dispatch(actions.searchSuccess(data));
    } catch (error) {
      if (axios.isCancel(error)) return;

      dispatch(actions.searchFailure());

      throw error;
    } finally {
      setCancelToken(null)
    }
  }

  const debounceSearch = () => {
    if (timer) {
      clearTimeout(timer)
    }

    const newTimer = setTimeout(search, 500);
    setTimer(newTimer);
  }

  return debounceSearch;
}

export const hooks = {
  useSearchMovie,
}
