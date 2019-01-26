import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import initialState from '../../reducers/location'

import App from '../app'

Enzyme.configure({ adapter: new Adapter() })

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};

describe('AppContainer', () => {
  const store = mockStore(initialState)
  const wrapper = shallowWithStore(<App />, store);

  afterEach(() => {
    fetchMock.restore()
  })

  it('Deve renderizar o container com a store', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  })
})
