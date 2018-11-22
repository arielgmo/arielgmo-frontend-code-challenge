import { FETCH_REPORTS_SUCCESSFUL } from '../actions/reportActions';

export default function reportReducer(state = [], action) {
  switch (action.type) {
    case FETCH_REPORTS_SUCCESSFUL:
      return [...action.payload];
    default:
      return state;
  }
}
