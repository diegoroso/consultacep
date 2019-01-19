import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

class InputCep extends Component {
  static propTypes = {
    fetchCep: PropTypes.func
  }

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
        autoFocus
        value={this.state.cep}
        mask='99999-999'
        maskChar=''
        placeholder='Ex.: 12970-000'
        onClick={this.handleClick}
        onChange={this.handleChange} />
    );
  }
}

export default InputCep
