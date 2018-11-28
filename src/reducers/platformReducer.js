import { FETCH_PLATFORMS_SUCCESSFUL } from '../actions/platformActions';

export default function platformReducer(state = [], action) {
  switch (action.type) {
    case FETCH_PLATFORMS_SUCCESSFUL:
      return [...action.payload];
    default:
      return state;
  }
}
