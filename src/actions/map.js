import axios from 'axios'

import {
  FETCH_GEOLOCATION,
  FETCH_GEOLOCATION_SUCCESS,
  FETCH_GEOLOCATION_FAIL
} from '../actions/actionTypes';

export function fetchGeolocation(data) {
  return function (dispatch) {
    dispatch({type: FETCH_GEOLOCATION})

    const params = {
      address: '12970-000Rua marechal deodoro 133',
      language: 'pt-BR',
      key: 'AIzaSyD2WqEZVC_PPsnICgtGQ5PPEsp07ooyISE'
    }

    axios.get('https://maps.googleapis.com/maps/api/geocode/json', { params })
      .then(response => {
        dispatch({type: FETCH_GEOLOCATION_SUCCESS, payload: response})
      })
      .catch(err => {
        dispatch({type: FETCH_GEOLOCATION_FAIL, payload: err})
      })
  }
}
