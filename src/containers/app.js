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
        <div className="App__content">
          <div className={`App__informations ${!!this.props.cep.data.cep ? 'loaded' : ''}`}>
            <InputCep onFetchCep={this.fetchCep}/>
            { this.props.cep.data.erro && !this.props.cep.loading ? <p className='App__informations__error'>CEP não encontrado</p> : null }
          </div>
          <Map state={this.props.map}/>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, { fetchCep, fetchGeolocation })(App)
