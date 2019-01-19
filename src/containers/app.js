import React, { Component } from 'react'
import InputCep from '../components/input-cep'
import Map from '../components/map';

import { connect } from 'react-redux'
import { fetchCep } from '../actions/cep'
import { fetchGeolocation } from '../actions/map'

const mapStateToProps = state => ({
  cep: state.cep,
  map: state.map
})

class App extends Component {
  fetchCep = (payload) => {
    this.props.fetchCep(payload);
  }

  render() {
    return (
      <div className="App">
        <div className="App-content">
          <InputCep onFetchCep={this.fetchCep}/>
          <Map />
          <pre> { this.props.cep.data.localidade } </pre>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, { fetchCep, fetchGeolocation })(App)
