import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import InputCep from '../input-cep'

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
  const props = {
    onFetchCep: jest.fn,
    onRef: jest.fn
  }

  const enzymeWrapper = shallow(<InputCep {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('InputCep', () => {
  const { enzymeWrapper } = setup()
  expect(enzymeWrapper).toMatchSnapshot();

  it('Renderiza o input sem quebras', () => {
    const div = document.createElement('div')
    expect(enzymeWrapper.unmount(div));
  })
})
