import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchCep } from '../actions/cep'
import { fetchGeolocation } from '../actions/map'

import Map from '../components/map';
import Loader from '../components/loader';
import InputCep from '../components/input-cep'

const mapStateToProps = state => ({
  location: state.location
})

class App extends Component {
  fetchCep = (payload) => {
    this.props.fetchCep(payload);
  }

  title = () => {
    const { cep } = this.props.location.data

    if (!cep) {
      return <h1 className='main__informations__title'>Consulta CEP</h1>
    }
  }

  description = () => {
    const { error, loaded, loading } = this.props.location

    if (!error && !loaded) {
      return <p className='main__informations__description'>Preencha o cep no campo abaixo para consultar a região desejada.</p>
    }

    if (error  && !loading) {
      return <p className='main__informations__description main__informations__description--error'>CEP não encontrado, por favor tente novamente.</p>
    }
  }

  address = () => {
    const {cep, logradouro, bairro, localidade, uf} = this.props.location.data

    return (
      <Fragment>
        { logradouro && bairro ? <p>{logradouro}, {bairro}</p> : '' }
        { localidade && uf && cep ? <p>{localidade}/{uf} - {cep}</p> : '' }
      </Fragment>
    )
  }

  render() {
    const {data, loading} = this.props.location
    return (
      <div className="main">
        <Map location={this.props.location}/>
        <div className={`main__informations ${data.cep ? 'loaded' : ''}`}>
          <div className='main__informations__box'>
            { this.title() }
            { this.description() }
            <InputCep onFetchCep={this.fetchCep}/>
            { this.address() }
          </div>
        </div>
        <Loader show={loading}></Loader>
      </div>
    );
  }
}
export default connect(mapStateToProps, { fetchCep, fetchGeolocation })(App)
