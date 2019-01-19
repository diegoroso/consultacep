import axios from 'axios'

export function fetchCep(zipcode) {
  return function (dispatch) {
    dispatch({type: 'FETCH_CEP'})

    axios.get(`https://viacep.com.br/ws/${zipcode}/json/`)
      .then(response => {
        dispatch({type: 'FETCH_CEP_SUCCESS', payload: response.data})
      })
      .catch(err => {
        dispatch({type: 'FETCH_CEP_FAIL', payload: err})
      })
  }
}
