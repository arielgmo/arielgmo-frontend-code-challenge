import axios from 'axios';
import { API_TOKEN } from '../utils';

export const FETCH_REPORTS_START = 'FETCH_REPORTS_START';
export const FETCH_REPORTS_SUCCESSFUL = 'FETCH_REPORTS_SUCCESSFUL';
export const FETCH_REPORTS_FAILED = 'FETCH_REPORTS_FAILED';

export function fetchStarted() {
  return {
    type: FETCH_REPORTS_START,
  };
}

export function fetchSuccessful(data) {
  return {
    type: FETCH_REPORTS_SUCCESSFUL,
    payload: data,
  };
}

export function fetchFailed(status) {
  return {
    type: FETCH_REPORTS_FAILED,
    payload: status,
  };
}

export function fetchReports() {
  return (dispatch) => {
    dispatch(fetchStarted());
    axios.get('http://challenge.skyhub.com.br/reports', {
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
