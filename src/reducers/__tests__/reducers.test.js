import reducer from '../location'
import * as types from '../../actions/actionTypes'

import { initialState } from '../location'

describe('Reducers', () => {
  it('Deve retornar o estado inicial', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('Manipula o reducer através da action FETCH_CEP', () => {
    expect(
      reducer([], { type: types.FETCH_CEP })
    ).toEqual({
      loading: true,
      error: false
    })

    expect(
      reducer(initialState, { type: types.FETCH_CEP })
    ).toEqual({
      ...initialState,
      loading: true,
      error: false
    })
  })

  it('Manipula o reducer através da action FETCH_GEOLOCATION', () => {
    expect(
      reducer([], { type: types.FETCH_GEOLOCATION })
    ).toEqual({
      loading: true,
      error: false
    })

    expect(
      reducer(initialState, { type: types.FETCH_GEOLOCATION })
    ).toEqual({
      ...initialState,
      loading: true,
      error: false
    })
  })

  it('Manipula o reducer através da action FETCH_CEP_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.FETCH_CEP_SUCCESS,
        payload: {
          cep: '02047-000',
          logradouro: 'Rua Maria Prestes Maia',
          bairro: 'Vila Guilherme',
          localidade: 'São Paulo',
          uf: 'SP'
        }
      })
    ).toEqual({
      data: {
        cep: '02047-000',
        logradouro: 'Rua Maria Prestes Maia',
        bairro: 'Vila Guilherme',
        localidade: 'São Paulo',
        uf: 'SP'
      }
    })

    expect(
      reducer(initialState, {
        type: types.FETCH_CEP_SUCCESS,
        payload: {
          cep: '02047-000',
          logradouro: 'Rua Maria Prestes Maia',
          bairro: 'Vila Guilherme',
          localidade: 'São Paulo',
          uf: 'SP'
        }
      })
    ).toEqual({
      ...initialState,
      data: {
        ...initialState.data,
        cep: '02047-000',
        logradouro: 'Rua Maria Prestes Maia',
        bairro: 'Vila Guilherme',
        localidade: 'São Paulo',
        uf: 'SP'
      }
    })
  })

  it('Manipula o reducer através da action FETCH_GEOLOCATION_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.FETCH_GEOLOCATION_SUCCESS,
        payload: {
          location: {
            lat: -23.5160587,
            lng: -46.6215272
          },
          zoom: 18
        }
      })
    ).toEqual({
      data: {
        coordinates: {
          lat: -23.5160587,
          lng: -46.6215272
        },
        zoom: 18,
        marker: true
      },
      loading: false,
      loaded: true
    })

    expect(
      reducer(initialState, {
        type: types.FETCH_GEOLOCATION_SUCCESS,
        payload: {
          location: {
            lat: -23.5160587,
            lng: -46.6215272
          },
          zoom: 18
        }
      })
    ).toEqual({
      ...initialState,
      data: {
        ...initialState.data,
        coordinates: {
          lat: -23.5160587,
          lng: -46.6215272
        },
        zoom: 18,
        marker: true
      },
      loading: false,
      loaded: true
    })
  })

  it('Manipula o reducer através da action FETCH_CEP_FAIL', () => {
    expect(
      reducer([], { type: types.FETCH_CEP_FAIL })
    ).toEqual({
      data: initialState.data,
      error: true,
      loading: false,
      loaded: true
    })

    expect(
      reducer(initialState, { type: types.FETCH_CEP_FAIL })
    ).toEqual({
      ...initialState,
      data: initialState.data,
      error: true,
      loading: false,
      loaded: true
    })
  })

  it('Manipula o reducer através da action FETCH_GEOLOCATION_FAIL', () => {
    expect(
      reducer([], { type: types.FETCH_GEOLOCATION_FAIL })
    ).toEqual({
      data: initialState.data,
      error: true,
      loading: false,
      loaded: true
    })

    expect(
      reducer(initialState, { type: types.FETCH_GEOLOCATION_FAIL })
    ).toEqual({
      ...initialState,
      data: initialState.data,
      error: true,
      loading: false,
      loaded: true
    })
  })
})
