import { LOADING_STATUS } from '../../constants/loadingStatus';

export const keyword = (state) => state.movies.keyword;

export const data = (state) => state.movies.data;

export const fetchingStatus = (state) => state.movies.fetchingStatus;

export const isFetching = (state) => fetchingStatus(state) === LOADING_STATUS.LOADING;

export const isError = (state) => fetchingStatus(state) === LOADING_STATUS.FAILURE;