import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Loader from '../Loader'

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
  const props = {
    show: false
  }

  const enzymeWrapper = shallow(<Loader {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Loader', () => {
  it('Aparecer e esconder o loader quando necessário', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('.loader').hasClass('show')).toBeFalsy()
    enzymeWrapper.setProps({ show: true })
    expect(enzymeWrapper.find('.loader').hasClass('show')).toBeTruthy()
  })
})
