import axios from 'axios';
import { API_TOKEN } from '../utils';

export const FETCH_PLATFORMS_START = 'FETCH_PLATFORMS_START';
export const FETCH_PLATFORMS_SUCCESSFUL = 'FETCH_PLATFORMS_SUCCESSFUL';
export const FETCH_PLATFORMS_FAILED = 'FETCH_PLATFORMS_FAILED';

export function fetchStarted() {
  return {
    type: FETCH_PLATFORMS_START,
  };
}

export function fetchSuccessful(data) {
  return {
    type: FETCH_PLATFORMS_SUCCESSFUL,
    payload: data,
  };
}

export function fetchFailed(status) {
  return {
    type: FETCH_PLATFORMS_FAILED,
    payload: status,
  };
}

export function fetchPlatforms() {
  return (dispatch) => {
    dispatch(fetchStarted());
    axios.get('http://challenge.skyhub.com.br/platforms', {
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return dispatch(fetchSuccessful(response.data));
        }
        return dispatch(fetchFailed(response.status));
      });
  };
}
