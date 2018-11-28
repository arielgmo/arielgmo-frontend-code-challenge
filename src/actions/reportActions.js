import axios from 'axios';
import { API_TOKEN } from '../utils';

export const FETCH_REPORTS_START = 'FETCH_REPORTS_START';
export const FETCH_REPORTS_SUCCESSFUL = 'FETCH_REPORTS_SUCCESSFUL';
export const FETCH_REPORTS_FAILED = 'FETCH_REPORTS_FAILED';
export const ADD_REPORT_START = 'ADD_REPORT_START';
export const ADD_REPORT_SUCCESSFUL = 'ADD_REPORT_SUCCESSFUL';
export const ADD_REPORT_FAILED = 'ADD_REPORT_FAILED';
export const DELETE_REPORT_START = 'DELETE_REPORT_START';
export const DELETE_REPORT_SUCCESSFUL = 'DELETE_REPORT_SUCCESSFUL';
export const DELETE_REPORT_FAILED = 'DELETE_REPORT_FAILED';

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

export function addReportStarted() {
  return {
    type: ADD_REPORT_START,
  };
}

export function addReportSuccessful() {
  return {
    type: ADD_REPORT_SUCCESSFUL,
  };
}

export function addReportFailed(status) {
  return {
    type: ADD_REPORT_FAILED,
    payload: status,
  };
}

export function deleteReportStarted() {
  return {
    type: DELETE_REPORT_START,
  };
}

export function deleteReportSuccessful() {
  return {
    type: DELETE_REPORT_SUCCESSFUL,
  };
}

export function deleteReportFailed(status) {
  return {
    type: DELETE_REPORT_FAILED,
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

export function addReport(report) {
  return (dispatch) => {
    dispatch(addReportStarted());
    axios.post('http://challenge.skyhub.com.br/reports',
      {
        ...report,
      },
      {
        headers: {
          authorization: API_TOKEN,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(addReportSuccessful());
          return dispatch(fetchReports());
        }
        return dispatch(addReportFailed());
      });
  };
}

export function deleteReport(id) {
  return (dispatch) => {
    dispatch(deleteReportStarted());
    axios.delete(`http://challenge.skyhub.com.br/reports/${id}`, {
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then((response) => {
        if (response.status === 200 || response.status === 204) {
          dispatch(deleteReportSuccessful());
          return dispatch(fetchReports());
        }
        return dispatch(deleteReportFailed());
      });
  };
}
