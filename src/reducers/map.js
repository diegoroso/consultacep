import {
  FETCH_GEOLOCATION,
  FETCH_GEOLOCATION_SUCCESS,
  FETCH_GEOLOCATION_FAIL
} from '../actions/actionTypes';

const initialState = {
  data: {},
  loading: false,
  loaded: false
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_GEOLOCATION:
      return {
        ...state,
        loading: true
      }

    case FETCH_GEOLOCATION_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true
      }

      case FETCH_GEOLOCATION_FAIL:
        return {
          ...state,
          data: action.payload,
          loading: false,
          loaded: true
        }

    default:
      return initialState
  }
}
