import { Observable } from 'rxjs'
import axios from 'axios';

export function requestAPI(options) {
  return new Observable((subscriber) => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    
    const optionsWithCancel = {
      ...options,
      cancelToken: source.token,
    }

    axios.request(optionsWithCancel)
      .then(response => {
        subscriber.next(response.data);
        subscriber.complete();
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          subscriber.complete();
        } else {
          subscriber.error(error);
        }
      })

    return () => {
      source.cancel()
    }
  });
}