import React, { Component } from 'react'
import InputCep from '../components/input-cep'

import { connect } from 'react-redux'
import { fetchCep } from '../actions/cep'

const mapStateToProps = state => ({
  cep: state.cep.data
})

class App extends Component {
  onFetchCep = (payload) => {
    this.props.fetchCep(payload);
  }

  render() {
    return (
      <div className="App">
        <div className="App-content">
          <InputCep onFetchCep={this.onFetchCep}/>
          <pre> { this.props.cep.localidade } </pre>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, { fetchCep })(App)
