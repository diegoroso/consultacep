import {
  RESET_TO_DEFAULT
} from '../actions/actionTypes';

export function resetToDefault() {
  return dispatch => {
    dispatch({type: RESET_TO_DEFAULT})
  }
}
