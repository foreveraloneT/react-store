import { createSlice } from '@reduxjs/toolkit'

import { LOADING_STATUS } from '../../constants/loadingStatus';

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
    idleSearch(state) {
      state.fetchingStatus = LOADING_STATUS.IDLE;
    },
  },
});

export default movieSlice.reducer;

export const actions = movieSlice.actions;
