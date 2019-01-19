import {
  FETCH_CEP,
  FETCH_CEP_SUCCESS,
  FETCH_CEP_FAIL
} from '../actions/actionTypes';

const initialState = {
  data: {},
  loading: false,
  loaded: false
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_CEP:
      return {
        ...state,
        loading: true
      }

    case FETCH_CEP_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true
      }

      case FETCH_CEP_FAIL:
        return {
          ...state,
          data: action.payload,
          loading: false,
          loaded: true
        }

    default:
      return state
  }
}
