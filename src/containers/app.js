import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCep } from '../actions/cep'
import { fetchGeolocation } from '../actions/map'

import Map from '../components/map';
import Loader from '../components/loader';
import InputCep from '../components/input-cep'

const mapStateToProps = state => ({
  cep: state.cep,
  map: state.map
})

class App extends Component {
  fetchCep = (payload) => {
    this.props.fetchCep(payload);
  }

  title = () => {
    if (!this.props.cep.data.cep) {
      return <h1 className='main__informations__title'>Consulta CEP</h1>
    }
  }

  description = () => {
    if (!this.props.cep.data.error && !this.props.cep.loaded) {
      return <p className='main__informations__description'>Preencha o cep no campo abaixo para consultar a região desejada.</p>
    } else if (this.props.cep.data.erro  && !this.props.cep.loading) {
      return <p className='main__informations__description--error'>CEP não encontrado, por favor tente novamente.</p>
    }
  }

  address = () => {
    const {cep, logradouro, bairro, localidade, uf} = this.props.cep.data

    return (
      <React.Fragment>
        { logradouro && bairro ? <p>{logradouro}, {bairro}</p> : '' }
        { localidade && uf && cep ? <p>{localidade}/{uf} - {cep}</p> : '' }
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="main">
        <Map state={this.props.map}/>
        <div className={`main__informations ${!!this.props.cep.data.cep ? 'loaded' : ''}`}>
          <div className='main__informations__box'>
            { this.title() }
            { this.description() }
            <InputCep onFetchCep={this.fetchCep}/>
            { this.address() }
          </div>
        </div>
        <Loader show={this.props.cep.loading || this.props.map.loading}></Loader>
      </div>
    );
  }
}
export default connect(mapStateToProps, { fetchCep, fetchGeolocation })(App)
