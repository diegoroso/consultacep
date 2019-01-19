import axios from 'axios'

import {
  FETCH_GEOLOCATION,
  FETCH_GEOLOCATION_SUCCESS,
  FETCH_GEOLOCATION_FAIL
} from '../actions/actionTypes';

export function fetchGeolocation(data) {
  return dispatch => {
    dispatch({type: FETCH_GEOLOCATION})

    const { cep, localidade, logradouro } = data;

    const params = {
      address: `${cep} ${localidade} ${logradouro}`,
      language: 'pt-BR',
      key: 'AIzaSyD2WqEZVC_PPsnICgtGQ5PPEsp07ooyISE'
    }

    axios.get('https://maps.googleapis.com/maps/api/geocode/json', { params })
      .then(response => {
        const location = response.data.results[0].geometry.location
        dispatch({type: FETCH_GEOLOCATION_SUCCESS, payload: {
          location,
          zoom: logradouro ? 18 : 14
        } })
      })
      .catch(err => {
        dispatch({type: FETCH_GEOLOCATION_FAIL, payload: err})
      })
  }
}
