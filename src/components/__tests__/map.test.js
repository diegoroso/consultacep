import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Map from '../map'
import { initialState } from '../../reducers/location'

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
  const props = {
    location: initialState
  }

  const enzymeWrapper = shallow(<Map {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Map', () => {
  const { enzymeWrapper } = setup()
  expect(enzymeWrapper).toMatchSnapshot();

  it('Verifica se o mapa esta funcionando', () => {
    const GoogleMap = shallow(enzymeWrapper.props().children)
    expect(GoogleMap).toBeTruthy()
  })
})
