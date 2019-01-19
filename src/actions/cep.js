export function fetchCep(code) {
  return {
    type: 'FETCH_CEP',
    payload: code
  }
}
