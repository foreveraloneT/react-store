import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

import * as movieApi from '../../apis/movie';
import { actions } from './slice';
import * as selectors from './selectors';

export const useSearchMovie = () => {
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
