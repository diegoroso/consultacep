const initialState = {
  code: '99999-999'
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case 'FETCH_CEP':
      return {
        ...state,
        code: action.payload
      }

    default:
      return initialState
  }
}
