import {
  FETCH_CEP,
  FETCH_GEOLOCATION,
  FETCH_CEP_SUCCESS,
  FETCH_GEOLOCATION_SUCCESS,
  FETCH_CEP_FAIL,
  FETCH_GEOLOCATION_FAIL,
  RESET_TO_DEFAULT
} from '../actions/actionTypes';

const initialState = {
  data: {
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
    coordinates: {
      lat: -14.7234029,
      lng: -51.4575307
    },
    zoom: 4,
    marker: false
  },
  error: false,
  loading: false,
  loaded: false
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_CEP:
    case FETCH_GEOLOCATION:
      return {
        ...state,
        loading: true,
        error: false
      }

    case FETCH_CEP_SUCCESS:
      const {cep, logradouro, bairro, localidade, uf} = action.payload
      return {
        ...state,
        data: {
          ...state.data,
          cep,
          logradouro,
          bairro,
          localidade,
          uf
        }
      }

    case FETCH_GEOLOCATION_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          coordinates: action.payload.location,
          zoom: action.payload.zoom,
          marker: true
        },
        loading: false,
        loaded: true
      }

    case FETCH_CEP_FAIL:
    case FETCH_GEOLOCATION_FAIL:
      return {
        ...state,
        data: initialState.data,
        error: true,
        loading: false,
        loaded: true
      }

    case RESET_TO_DEFAULT:
      return initialState

    default:
      return state
  }
}
