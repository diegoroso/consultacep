import React, { Component } from 'react';
import InputMask from 'react-input-mask';

class InputCep extends Component {

  constructor() {
    super();

    this.state = {
      cep: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      cep: e.target.value
    });

    if (e.target.value.length === 9) {
      this.props.onFetchCep(e.target.value)
      e.target.blur();
    }
  }

  handleClick(e) {
    this.setState({
      cep: ''
    });
  }

  render() {
    return (
      <InputMask
        value={this.state.cep}
        type="tel"
        mask='99999-999'
        maskChar=''
        className='input-cep'
        placeholder='Ex.: 02047-000'
        onClick={this.handleClick}
        onChange={this.handleChange} />
    );
  }
}

export default InputCep
