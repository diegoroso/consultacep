import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'

import { initialState } from '../../reducers/location'
import { fetchCep } from '../cep'
import { resetToDefault } from '../reset'
import { fetchGeolocation } from '../map'
import * as types from '../../actions/actionTypes'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('Cria uma ação para retornar a aplicação ao seu estado default', () => {
    expect(resetToDefault()).toEqual({
      type: types.RESET_TO_DEFAULT
    })
  })

  it('Cria FETCH_CEP_SUCCESS quando a busca do cep foi concluída', () => {
    const mockResponse = {
      bairro: '',
      cep: '12970-000',
      complemento: '',
      gia: '5344',
      ibge: '3538600',
      localidade: 'Piracaia',
      logradouro: '',
      uf: 'SP',
      unidade: ''
    }

    fetchMock.getOnce('https://viacep.com.br/ws/12970-000/json/', {
      body: mockResponse,
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.FETCH_CEP },
      { type: types.FETCH_CEP_SUCCESS, body: { mockResponse }}
    ]

    const store = mockStore(initialState)

    store.dispatch(fetchCep('12970-000')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('Cria FETCH_GEOLOCATION_SUCCESS quando a busca da cordenada do mapa foi concluída', () => {
    const mockResponse = {
      lat: -23.0530355,
      lng: -46.3598167
    }

    fetchMock.getOnce('https://maps.googleapis.com/maps/api/geocode/json', {
      body: mockResponse,
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.FETCH_GEOLOCATION },
      { type: types.FETCH_GEOLOCATION_SUCCESS, body: { mockResponse }}
    ]

    const store = mockStore(initialState)

    store.dispatch(fetchGeolocation('12970-000 Piracaia')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
