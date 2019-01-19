import {
  FETCH_GEOLOCATION,
  FETCH_GEOLOCATION_SUCCESS,
  FETCH_GEOLOCATION_FAIL
} from '../actions/actionTypes';

const initialState = {
  data: {
    location: {
      lat: -16.7234029,
      lng: -56.4575307
    },
    zoom: 3,
    marker: false
  },
  error: null,
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
        data: {
          location: action.payload.location,
          zoom: action.payload.zoom,
          marker: true
        },
        loading: false,
        loaded: true
      }

      case FETCH_GEOLOCATION_FAIL:
        return {
          ...state,
          data: initialState.data,
          error: action.payload,
          loading: false,
          loaded: true
        }

    default:
      return state
  }
}
